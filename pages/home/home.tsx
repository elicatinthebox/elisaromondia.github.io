import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  Footer,
  MainHeader,
} from '../../utils'
import {
  profilePicture
} from '../../assets'
import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Elisa Romondia</title>
        <meta name="description" content="Data Scientist and Blockchain Architect" />
        <meta name="author" content="Elisa Romondia" />
        <meta name="keywords" content="Elisa, Romondia, Ethereum, Blockchain" />
        <meta property="og:image" content="https://www.elisaromondia.com/preview.png" key="ogimage" />
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon" />

      </Head>
      <div className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.introduction}>
            <MainHeader />
            <div className={styles.profilePicture}>
              <Image
                alt="Profile picture of Elisa Romondia."
                src={profilePicture}
                width={400}
              />
            </div>
          </div>
          <div className={styles.swipeDownIcon}>

          </div>
        </div>
        <div className={styles.aboutSection}>
          <div className={styles.linkBox}>
            <h2 className={styles.linkBoxTitle}>About</h2>
            <div className={styles.linkBoxTextContent}>
              {"Founder and maintainer of "}
              <Link href={`https://devoleum.com`}>{`Devoleum`}</Link>
              {`, an open-source blockchain solution for supply chain traceability that uses a cross-blockchain infrastructure (Ethereum, Polygon, and Algorand) and linked open data.
              
              As a data scientist and blockchain architect, I am an expert in designing and implementing blockchain solutions and data infrastructures for businesses and organizations, facilitating the implementation of AI models. I have experience in training teams and organizations on implementing and maintaining blockchain architectures, ranging from EVM public blockchains to Ethereum or custom layer 2. I am specialized in blockchain solutions for supply chain management and traceability, NFT, and DeFi protocols governed by DAO.

              My first focus is on the security of the cryptographic and smart contracts implementations bringing security by-design vision. My modus operandi mixes data science and the classic smart contract audit methods, analyzing decentralized applications using data patterns, static analysis, and fuzzing.`}</div>
            <Link href={`https://www.linkedin.com/in/elisa-romondia/`} className={styles.linkBoxButton}>
              LinkedIn
            </Link>
          </div>
        </div>
        <div className={styles.aboutSection}>
          <div className={styles.linkBox}>
            <h2 className={styles.linkBoxTitle}>Contact</h2>
            <div className={styles.linkBoxTextContent}>{`I am available on Telegram. Telegram offers end-to-end encryption for all messages, ensuring a high level of security and privacy.  So, if you want to get in touch with me quickly and securely, consider reaching out on Telegram.
              `}</div>
            <Link href={`https://telegram.me/elicatinthebox`} className={styles.linkBoxButton}>
              @elicatinthebox
            </Link>
          </div>
        </div>


      </div>
      <Footer />
    </div>
  )
}
