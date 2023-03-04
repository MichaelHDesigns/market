import { ThirdwebNftMedia, useContract, useActiveListings } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import React from "react";
import { marketplaceContractAddress, NFT_COLLECTION_ADDRESS } from "../../addresses";
import Skeleton from "../Skeleton/Skeleton";
import styles from "./NFT.module.css";

type Props = {
  nft: NFT;
};

export default function NFTComponent({ nft }: Props) {
  const { contract: marketplace, isLoading: loadingContract } = useContract(
      marketplaceContractAddress, "marketplace"
  );

    // 1. Load if the NFT is for direct listing
    const { data: listings, isLoading: loadingDirect } =
        useActiveListings(marketplace, {
            tokenContract: NFT_COLLECTION_ADDRESS,
            tokenId: nft.metadata.id,
        });

  return (
    <>
      <ThirdwebNftMedia metadata={nft.metadata} className={styles.nftImage} />

      <p className={styles.nftTokenId}>Token ID #{nft.metadata.id}</p>
      <p className={styles.nftName}>{nft.metadata.name}</p>
            <div className={styles.priceContainer}>
                {loadingContract || loadingDirect ? (
                    <Skeleton width="100%" height="100%" />
              ) : listings && listings[0] ? (
                    <div className={styles.nftPriceContainer}>
                        <div>
                            <p className={styles.nftPriceLabel}>Price</p>
                            <p className={styles.nftPriceValue}>
                                  {`${listings[0]?.buyoutCurrencyValuePerToken.displayValue}
          ${listings[0]?.buyoutCurrencyValuePerToken.symbol}`}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className={styles.nftPriceContainer}>
                        <div>
                            <p className={styles.nftPriceLabel}>Price</p>
                            <p className={styles.nftPriceValue}>Not for sale</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
