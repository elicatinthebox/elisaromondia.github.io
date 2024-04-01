import React from 'react'
import Image from 'next/image'
import styles from './icon.module.scss'

type IconProps = {
  defaultIcon: string
  href?: string
  height: number
  name: string
  tooltipID?: string
  width: number
}

export function FooterIcon(props: IconProps) {

  return (
    <a data-tip={props.tooltipID ? true : false} data-for={props.tooltipID} href={props.href} className={styles.iconContainer} style={{height: props.height, width: props.width}}>
      
      <div className={styles.icon}>
        <Image
          alt={`Default ${props.name} icon.`}
          src={props.defaultIcon}
          width={props.width}
          height={props.height}/>
      </div>
    </a>
  )
}