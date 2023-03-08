import styles from "../../styles/Profile.module.css";
import randomColor from "../../util/randomColor";
import background from "./public/logo.png";
import Container from "../../components/Container/Container";
import { marketplaceContractAddress, NFT_COLLECTION_ADDRESS } from "../../addresses";
import { useRouter } from "next/router";
import Skeleton from "../../components/Skeleton/Skeleton";
import React, { useState } from "react";
import { MediaRenderer, useContract, useOwnedNFTs, useActiveListings} from "@thirdweb-dev/react";
import NFTGrid from "../../components/NFT/NFTGrid";
import ListingWrapper from "../../components/ListingWrapper/ListingWrapper";
import { ListingType } from "@thirdweb-dev/sdk";
import Link from "next/link";

const [randomColor1, randomColor2, randomColor3, randomColor4] = [
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
];

export default function ProfilePage() {
    const router = useRouter();
    const [tab, setTab] = useState<"nfts" | "listings" >("nfts");
    const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);
    const { contract: marketplace } = useContract(marketplaceContractAddress, "marketplace");

    const { data: ownedNfts, isLoading: loadingOwnedNfts  } = useOwnedNFTs(
        nftCollection,
        router.query.address as string
    );

    const { data: listings, isLoading: loadingListings } =
        useActiveListings(marketplace, {
            seller: router.query.address as string,
        });

    return (
        <Container maxWidth="lg">
            <div className={styles.profileHeader}>
                <div
                    className={styles.coverImage}
                    style={{
                        background: `linear-gradient(90deg, ${randomColor1}, ${randomColor2})`,
                    }}
                />
                <div
                  className={styles.profilePicture}
                    style={{
                        backgroundImage: `url(${background})`,
                    }}
                />
                <h1 className={styles.profileName}>
                    {router.query.address ? (
                        router.query.address.toString().substring(0, 4) +
                        "..." +
                        router.query.address.toString().substring(38, 42)
                    ) : (
                        <Skeleton width="320" />
                    )}
                </h1>
            </div>

            <div className={styles.tabs}>
                <h3
                    className={`${styles.tab} 
        ${tab === "nfts" ? styles.activeTab : ""}`}
                    onClick={() => setTab("nfts")}
                >
                    NFTs
                </h3>
                <h3
                    className={`${styles.tab} 
        ${tab === "listings" ? styles.activeTab : ""}`}
                    onClick={() => setTab("listings")}
                >
                    Listings
                </h3>
            </div>

            <div
                className={`${tab === "nfts" ? styles.activeTabContent : styles.tabContent
                    }`}
            >
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
            </div>
            <div className={`${tab === "listings" ? styles.activeTabContent : styles.tabContent }`}>
               
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
