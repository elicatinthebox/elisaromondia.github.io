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
        {"Data Scientist and Blockchain Architect expert in designing and implementing blockchain solutions and data infrastructures for businesses and organizations, facilitating the implementation of AI models."}
      </h2>
    </div>
  )
}