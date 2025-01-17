import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useNFTs,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Gallery.module.css";

const Gallery: NextPage = () => {
  const { contract } = useContract(
    "0x8bF2497ac488ba9Bb0BFB4b3864aDF0f8D42437f",
    "nft-drop"
  );
  const address = useAddress();
  const { data: nfts, isLoading: loading } = useNFTs(contract, {
    start: 0,
    count: 10,
  });

  const truncateAddress = (address: string) => {
    return (
      address.substring(0, 6) + "..." + address.substring(address.length - 4)
    );
  };

  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {nfts && nfts?.length > 0 && (
        <div className={styles.cards}>
          {nfts
            .filter(
              (nft) =>
                nft.owner !== "0x0000000000000000000000000000000000000000"
            )
            .map((nft) => (
              <div key={nft.metadata.id.toString()} className={styles.card}>
                <h1>{nft.metadata.name}</h1>
                <ThirdwebNftMedia
                  metadata={nft.metadata}
                  className={styles.image}
                />
                <p>
                  owned by{" "}
                  {address && nft.owner === address
                    ? "you"
                    : truncateAddress(nft.owner)}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
