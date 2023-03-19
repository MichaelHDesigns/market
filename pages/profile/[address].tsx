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

const ProfilePage = () => {
  const [selectedNFT, setSelectedNFT] = useState(null);
  const { user } = useContext(AppContext);
  const [darkMode, setDarkMode] = useState(false);
  const [bio, setBio] = useState(user.bio);

  const router = useRouter();

  const { nfts: ownedNfts, loading: ownedNftsLoading } = useOwnedNFTs({
    contractAddress: NFT_COLLECTION_ADDRESS,
    account: user.ethAddress,
  });

  const { listings: activeListings, loading: activeListingsLoading } = useActiveListings({
    contractAddress: marketplaceContractAddress,
    seller: user.ethAddress,
    listingType: ListingType.SELLING,
  });

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleUpdateBio = (event) => {
    setBio(event.target.value);
  };

  return (
    <div className={`profile ${darkMode ? 'dark-mode' : ''}`}>
      <div className={styles.profileHeader}>
        <div className={styles.background} style={{ backgroundColor: randomColor() }}>
          <img className={styles.logo} src={background} alt="logo" />
        </div>
        <div className={styles.profileHeaderInfo}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.bio}</p>
        </div>
        <div className={styles.profileHeaderActions}>
          <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
        </div>
      </div>
      <Container>
        <h2>Owned NFTs</h2>
        {ownedNftsLoading ? (
          <Skeleton />
        ) : (
          <NFTGrid
            nfts={ownedNfts}
            onNFTClick={(nft) => {
              setSelectedNFT(nft);
            }}
          />
        )}
        <h2>Active Listings</h2>
        {activeListingsLoading ? (
          <Skeleton />
        ) : (
          <ListingWrapper listings={activeListings} />
        )}
        {selectedNFT && (
          <MediaRenderer
            assetUrl={selectedNFT.tokenURI}
            mimeType="image/svg+xml"
            render={(url) => (
              <div className={styles.selectedNFTContainer}>
                <img src={url} alt="selected NFT" />
                <button onClick={() => setSelectedNFT(null)}>Close</button>
              </div>
            )}
          />
        )}
      </Container>
    </div>
  );
};

export default ProfilePage;
