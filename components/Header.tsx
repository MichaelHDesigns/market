import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export default function Header() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={48}
              height={48}
              alt="ALT logo"
            />
          </Link>

          <div className={styles.navMiddle}>
            <Link href="https://thirdweb.com/thirdweb.eth/TokenERC721" className={styles.link}>
              Create
            </Link>
            <Link href="/buy" className={styles.link}>
              Buy
            </Link>
            <Link href="/create" className={styles.link}>
              Sell
            </Link>
            <Link href="/gallery" className={styles.link}>
              Gallery
             </Link>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet />
          </div>
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon.png"
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
