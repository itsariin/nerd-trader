import React, { useState } from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import styles from './TopBar.module.css';
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link'; // Import Link from Next.js
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button
} from '@chakra-ui/react'

interface TopBarProps {
  search: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TopBar: React.FC<TopBarProps> = ({ search, onSearchChange }) => {
  return (
    <div className={styles.topBar}>
      <div className={styles.frame}>

        <div className={styles.nerdTrader}>
        <img
        className={styles.logo}
        loading="lazy"
        alt=""
        src="/logo.png"
        />
          Nerd Trader</div>
        <div> 
        <Button leftIcon={<img
        className={styles.logo}
        loading="lazy"
        alt=""
        src="/bulb.png"
        />} colorScheme='whitealpha' variant='solid' size='sm' className={styles.bulb}>
      </Button></div>
          <div className={styles.links}>
        <Link href="/news" passHref>
          <div className={styles.link}>News</div>
        </Link>
        <Link href="/stocks" passHref>
          <div className={styles.link}>Stocks</div>
        </Link>
          <div className={styles.link}>Community</div>
          <div className={styles.link}>Stocks</div>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search"
              className={styles.search}
              value={search}
              onChange={onSearchChange}
            />
          </div>
          <div className={styles.userSettings}>
            <button name='Notification'><FaRegBell /></button>
            <button name='Settings'><IoSettingsOutline /></button>
            <Menu>
              <MenuButton as={Button} colorScheme='yellow'>
                <FaUserCircle />
              </MenuButton>
              <MenuList>
                <MenuGroup title='Account'>{/* Use Link to wrap MenuItem */}
                  <Link href="/profile" passHref>
                  <MenuItem>My Account</MenuItem>
                  </Link>
                  <MenuItem>Payments </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;