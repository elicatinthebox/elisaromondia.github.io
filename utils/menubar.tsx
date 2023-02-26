import Link from 'next/link'
import styles from './menubar.module.scss'

type MenuBarProps = {
  activeTab: "Home" | "Work" | "About"
}

export function VMenuBar(props: MenuBarProps) {
  return (
    <nav className={styles.menuBar}>
      <Link href={`/`} className={styles.title}>
          <div className={styles.squareInitials}>
            ER
          </div>
          <h3 className={styles.name}>
            Elisa Romondia
          </h3>
      </Link>
    </nav>
  )
}