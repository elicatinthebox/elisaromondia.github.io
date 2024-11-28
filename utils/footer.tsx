import { FooterIcon } from './icon'
import {
  linkedInLogo,
  gitHubLogo,
  telegramLogo,
  instagramLogo
} from '../assets'
import styles from './footer.module.scss'

interface IFooterIcon {
  defaultIcon: any
  href: string
  name: string
}

const FooterIcons: IFooterIcon[] = [
  {
    defaultIcon: linkedInLogo,
    href: "https://www.linkedin.com/in/Elisa-Romondia",
    name: "LinkedIn",
  },
  {
    defaultIcon: instagramLogo,
    href: "https://www.instagram.com/elicatinthebox/",
    name: "Instagram",
  },
  {
    defaultIcon: gitHubLogo,
    href: "https://github.com/elicatinthebox",
    name: "GitHub",
  },
  {
    defaultIcon: telegramLogo,
    href: "http://telegram.me/elicatinthebox",
    name: "Telegram",
  },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h4 className={styles.copyrights}>
        2024 Elisa Romondia 
        <br /> P.IVA 04082590136
        <br />
        Build with <span>Next.js/TypeSript</span>
      </h4>
      <div className={styles.icons}>
        {FooterIcons.map((icon, index) => (
          <FooterIcon
            key={index}
            defaultIcon={icon.defaultIcon}
            name={icon.name}
            href={icon.href}
            height={30}
            width={30}
          /> 
              
        ))}
      </div>
    </footer>
  )
}