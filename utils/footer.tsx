import { VIcon } from './icon'
import {
  linkedInLogo,
  gitHubLogo,
  telegramLogo,
  twitchLogo,
  instagramLogo
} from '../assets'
import styles from './footer.module.scss'

export function VFooter() {
  return (
    <footer className={styles.footer}>
      <h4 className={styles.copyrights}>
        ©2023
        <br />
        Build with <span>Next.js/TypeSript</span>
      </h4>
      <div className={styles.icons}>
        <VIcon
          defaulIcon={linkedInLogo}
          onHoverIcon={linkedInLogoHover}
          href="https://www.linkedin.com/in/Elisa-Romondia-0b2ba815a"
          height={30}
          width={30}
          name="LinkedIn" />
        <VIcon
          defaulIcon={instagramLogo}
          onHoverIcon={instagramLogo}
          href="https://www.instagram.com/elicatinthebox/"
          height={30}
          width={30}
          name="Instagram" />
        <VIcon
          defaulIcon={gitHubLogo}
          onHoverIcon={gitHubLogoHover}
          href="https://github.com/elisaromondia"
          height={30}
          width={30}
          name="GitHub" />
        <VIcon
          defaulIcon={telegramLogo}
          onHoverIcon={telegramLogo}
          href="http://telegram.me/elicatinthebox"
          height={30}
          width={30}
          name="Telegram" />
        <VIcon
          defaulIcon={twitchLogo}
          onHoverIcon={twitchLogo}
          href="https://www.twitch.tv/elicatinthebox"
          height={30}
          width={30}
          name="Twitch" />

      </div>
    </footer>
  )
}