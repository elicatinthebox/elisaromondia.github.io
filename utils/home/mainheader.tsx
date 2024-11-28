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
        {"Certified Cloud Solution Architect and Data Scientist, internationally recognized as one of the Forbes 60 women who are shaking up tech across the globe. Expert in designing and implementing distributed architectures and data infrastructures."}
      </h2>
    </div>
  )
}