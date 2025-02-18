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
        <meta name="description" content="Data Scientist and Solution Architect" />
        <meta name="author" content="Elisa Romondia" />
        <meta name="keywords" content="Elisa, Romondia, Ethereum, AI, AZ305, DataScience, Architect, Cloud, Blockchain" />
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
              {"She was one of the founders of "}
              <Link href={`https://devoleum.com`}>{`Devoleum`}</Link>
              {`, a blockchain experiment for supply chain traceability that used a cross-blockchain infrastructure (Ethereum, Polygon, and Algorand) and linked open data.

              Expert in designing and implementing distributed architectures and data infrastructures for businesses and organisations, especially facilitating the implementation of authentication systems and AI models, security compliance. Years of experience in training teams and organisations on implementing and maintaining distributed architectures, ranging from microservices architectures, EVM public blockchain to Ethereum or custom layer 2, and migrations of legacy systems to cloud.
              `}
              {`
              Awarded in national and international events such as:
              
              `}
              <Link href={`https://italy.inspiringfifty.org/italy-2018`}>{`InspiringFifty Italy
              `}</Link>
              <Link href={`https://www.forbes.com/sites/allysonkapin/2018/09/19/60-women-led-startups-who-are-shaking-up-tech-across-the-globe/#19e50d6675da`}>{`Forbes 60 Women-Led Startups That Are Shaking Up Tech Across The Globe
              `}</Link>
              <Link href={`https://www.lefigaro.fr/secteur/high-tech/start-up/2017/10/20/32004-20171020ARTFIG00341-qui-est-derriere-novagray-la-start-up-recompensee-par-le-prix-starther.php`}>{`Station F StartHer Awards
              `}</Link>
              <Link href={`https://www.economyup.it/blog/premio-cuore-digitale-l-hackaton-per-aiutare-le-persone-con-disabilita-visive/`}>{`Hackathon Cuore Digitale
              `}</Link>
              <Link href={`https://www.key4biz.it/digithon-secondo-posto-per-la-startup-romana-dammi-la-mano-video/163721/`}>{`Tim #Wcap Prize at Digithon
              `}</Link>
            </div>
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
