import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  MediaRenderer,
  useActiveListings,
  useContract,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { marketplaceContractAddress } from "../addresses";

const Home: NextPage = () => {
  const router = useRouter();
  const { contract: marketplace } = useContract(marketplaceContractAddress, "marketplace");
  const { data: listings, isLoading: loadingListings } = useActiveListings(marketplace);

  return (
    <>
      {/* Content */}
      <div className={styles.container}>
        {/* Top Section */}
        <h1 className={styles.h1}>ALT NFT Marketplace</h1>
        <p className={styles.explain}>
          on the {" "}
          <b>
            {" "}
            <a
              href="https://altcoinchain.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.red}
            >
              Altcoinchain
            </a>
          </b>{" "}
          Network.
        </p>
         </div>
		 <div className={styles.container}>
        <hr className={styles.divider} />
		  { /* Create Section */ }
        <h1 className={styles.h1}>Create NFTs</h1>
        <p className={styles.explain}>
          using {" "}
          <b>
            {" "}
            <a
              href="https://thirdweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.purple}
            >
              THIRDWEB
            </a>
          </b>{" "}
          NFT Collection Smart Contracts. Create A NFT Collection,
	  Deploy the contract,
      	  Mint your NFTs & then list them
	  on ALT NFT Marketplaceto create your NFTs.
	  If you are ready to list, click Create below
      	  & upload your NFT Collection Address along with
	  token ID, set listing price & list your NFT
        </p>
        <div style={{ marginTop: 32, marginBottom: 32 }}>
          <Link href="/create" className={styles.mainButton} style={{ textDecoration: "none" }}>
            Create A Listing
          </Link>
        </div>
		</div>

         <div className={styles.container}>
        <hr className={styles.divider} />
        {/* Market Section */}
        <h1 className={styles.h1}>ALT NFTs</h1>
           <p className={styles.explain}>
          NFTs for Sale or Auction.
        </p>
        </div>
        <div className="main">
          {
            // If the listings are loading, show a loading message
            loadingListings ? (
              <div>Loading listings...</div>
            ) : (
              // Otherwise, show the listings
              <div className={styles.listingGrid}>
                {listings?.map((listing) => (
                  <div
                    key={listing.id}
                    className={styles.listingShortView}
                    onClick={() => router.push(`/listing/${listing.id}`)}
                  >
                    <MediaRenderer
                      src={listing.asset.image}
                      style={{
                        borderRadius: 16,
                        // Fit the image to the container
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <h2 className={styles.nameContainer}>
                      <Link href={`/listing/${listing.id}`} className={styles.name}>
                        {listing.asset.name}
                      </Link>
                    </h2>

                    <p>
                      <b>{listing.buyoutCurrencyValuePerToken.displayValue}</b>{" "}
                      {listing.buyoutCurrencyValuePerToken.symbol}
                    </p>
                  </div>
                ))}
              </div>
            )
          }
      </div>
    </>
  );
};

export default Home;
