import {
  useNFTs, MediaRenderer,
    useActiveListings,
    useContract, } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS, marketplaceContractAddress  } from "../addresses";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
    const router = useRouter();
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const { contract: marketplace } = useContract(marketplaceContractAddress, "marketplace");
    const { data, isLoading } = useNFTs(contract);
    const { data: listings, isLoading: loadingListings } =
        useActiveListings(marketplace, {
            seller: router.query.address as string,
        });

  return (
    <Container maxWidth="lg">
      <h1>Buy NFTs</h1>
      <p>Browse which NFTs are available from the collection.</p>
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
    </Container>
  );
}
