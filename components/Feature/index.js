import React from 'react'
import styles from './styles.module.css'

function Feature({imgSrc, feature, desc, isReverse}) {
  return (
    <div className={styles.container} style={{flexDirection: isReverse? "row-reverse" : ''}}>
      <img src={'/assets/IceBreakerSS.svg'} className={styles.img}/>
      <div className={styles.infoContainer} style={{marginRight: isReverse? "3rem" : "0rem", marginLeft: isReverse? "0rem" : "3rem"}}>
      <h2>Ice Breakers{feature}</h2>
      <p>{desc}Ice Breakers provide a way for users to start a conversation with a business with a list of frequently asked questions. A maximum of 4 questions can be set via the Ice Breaker API. Starting Oct 19th, 2021, Ice Breakers supports localization to allow businesses to set custom questions depending on the user locale. The API will have a new format and we encourage developers to leverage the new format to set and retrieve Ice Breakers information. The list of supported locales can be found here.</p>
      </div>
    </div>
  )
}

export default Feature