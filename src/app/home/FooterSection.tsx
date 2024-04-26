import React from 'react'
import styles from './FooterSection.module.css'
import { FiInfo } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { RiAdvertisementLine ,RiTwitterXLine,RiFacebookCircleLine ,RiInstagramLine, RiYoutubeLine} from "react-icons/ri";
import { TbBrandBlogger } from "react-icons/tb";
import { MdOutlinePrivacyTip,MdOutlineSecurity ,MdHelpOutline} from "react-icons/md";

function FooterSection() {
    return (
        <div className={styles.footer}>
            <div className={styles.alignMent}><p  className={styles.icon}><FiInfo/>About</p> <p className={styles.icon}><HiOutlineSupport />Support </p><p className={styles.icon}><RiAdvertisementLine />Advertise</p> <p className={styles.icon}><TbBrandBlogger />Blog</p> <p className={styles.icon}>Terms</p> </div>
            <div className={styles.alignMent}><p className={styles.icon}><MdOutlinePrivacyTip />Privacy</p> <p className={styles.icon}><MdOutlineSecurity />Security </p><p className={styles.icon}>Status</p> <p className={styles.icon}><MdHelpOutline />Help</p></div>
            <div className={styles.alignMent1}><RiTwitterXLine  />  <RiFacebookCircleLine />  <RiInstagramLine />  <RiYoutubeLine /> </div>
            <p className={styles.icon}>© 2024 Nerd Trader, All Rights Reserved.</p>
        </div>
    )
}

export default FooterSection