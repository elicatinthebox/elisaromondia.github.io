import { FooterIcon } from './icon'
import {
  linkedInLogo,
  gitHubLogo,
  telegramLogo,
  twitchLogo,
  instagramLogo
} from '../assets'
import styles from './footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h4 className={styles.copyrights}>
        ©2023
        <br />
        Build with <span>Next.js/TypeSript</span>
      </h4>
      <div className={styles.icons}>
        <FooterIcon
          defaulIcon={linkedInLogo}
          href="https://www.linkedin.com/in/Elisa-Romondia"
          height={30}
          width={30}
          name="LinkedIn" />
        <FooterIcon
          defaulIcon={instagramLogo}
          href="https://www.instagram.com/elicatinthebox/"
          height={30}
          width={30}
          name="Instagram" />
        <FooterIcon
          defaulIcon={gitHubLogo}
          href="https://github.com/elisaromondia"
          height={30}
          width={30}
          name="GitHub" />
        <FooterIcon
          defaulIcon={telegramLogo}
          href="http://telegram.me/elicatinthebox"
          height={30}
          width={30}
          name="Telegram" />
        <FooterIcon
          defaulIcon={twitchLogo}
          href="https://www.twitch.tv/elicatinthebox"
          height={30}
          width={30}
          name="Twitch" />
      </div>
    </footer>
  )
}