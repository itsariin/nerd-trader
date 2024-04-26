import React from 'react'
import styles from './WhyUs.module.css'
import {Divider } from '@chakra-ui/react'

const WhyUs = () => {
  return (
    <div className={styles.container}>  
        <h2 className={styles.h2_class}>
            Why Choose Nerd Trader?
        </h2>
        <div className={styles.whyans}>
            Lorem ipsum dolor sit amet consectetur. Sit arcu vitae bibendum platea leo. Pharetra proin ante massa quam elementum. Feugiat id gravida ornare molestie turpis tincidunt arcu dolor cursus. Fermentum ac ultrices suspendisse enim commodo quisque
        </div>
        <div className={styles.whyUsSection}>
            <div className={styles.secAns}>
                <div>1
                <img
                    className={styles.logo}
                    loading="lazy"
                    alt=""
                    src="/logo.png"
                    />
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. </p>
                   
                </div>
                <div>2
                <img
                    className={styles.logo}
                    loading="lazy"
                    alt=""
                    src="/logo.png"
                    />
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. </p>
                </div>
            </div>
            <div className={styles.secAns}>
                <div>1
                <img
                    className={styles.logo}
                    loading="lazy"
                    alt=""
                    src="/logo.png"
                    />
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. </p>
                </div>
                <div>2
                <img
                    className={styles.logo}
                    loading="lazy"
                    alt=""
                    src="/logo.png"
                    />
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. </p>
                </div>
            </div>
            <div className={styles.secAns}>
                <div>1
                <img
                    className={styles.logo}
                    loading="lazy"
                    alt=""
                    src="/logo.png"
                    />
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. </p>
                </div>
                <div>2
                <img
                    className={styles.logo}
                    loading="lazy"
                    alt=""
                    src="/logo.png"
                    />
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. </p>
                </div>
            </div>
        </div>
        <Divider colorScheme= "blackAlpha"/>
    </div>
  )
}

export default WhyUs