import React from 'react'
import styles from './mainheader.module.scss'
import { useTypedText } from '../typingtext'

export function MainHeader() {
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        {useTypedText("Elisa Romondia", 50)}
        <br />
      </h1>
      <h2 >
        {"Blockchain Architect expert in designing and implementing blockchain solutions for businesses and organizations."}
      </h2>
    </div>
  )
}