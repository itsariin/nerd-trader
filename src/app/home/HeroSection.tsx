import React, { useState } from 'react';
import styles from './HeroSection.module.css';
import { FaLightbulb } from "react-icons/fa";
import { Button, ButtonGroup, Stack} from '@chakra-ui/react'

interface HeroSectionProps {
  search: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ search, onSearchChange }) => {
  return (
    <div className={styles.largepage}>
      <div className={styles.bookvalue}>
          <Stack direction='row' spacing={8}>
            <Button rightIcon={<FaLightbulb />} colorScheme='green' variant='solid'>
              Book Value
            </Button>
            <Button rightIcon={<FaLightbulb />} colorScheme='green' variant='solid'>
              Book Value
            </Button>
            <Button rightIcon={<FaLightbulb />} colorScheme='green' variant='solid'>
              Book Value
            </Button>
            <Button rightIcon={<FaLightbulb />} colorScheme='green' variant='solid'>
              Book Value
            </Button>
          </Stack>
      </div>

        <div className={styles.alignment}>
            <img
            className={styles.logo}
            loading="lazy"
            alt=""
            src="/logo.png"
          />
          <h1 className={styles.title}>Nerd Trader</h1>
        </div>
        <div className={styles.alignment}>
          <input
          type="text"
          placeholder="Search for a Company"
          className={styles.search}
          value={search}
          onChange={onSearchChange}
          />
        </div>
        <div className={styles.bookvalue}>
          <Stack direction='row' spacing={8}>
            <Button rightIcon={<FaLightbulb />} colorScheme='green' variant='solid'>
              Book Value
            </Button>
            <Button rightIcon={<FaLightbulb />} colorScheme='green' variant='solid'>
              Book Value
            </Button>
            <Button rightIcon={<FaLightbulb />} colorScheme='green' variant='solid'>
              Book Value
            </Button>
            <Button rightIcon={<FaLightbulb />} colorScheme='green' variant='solid'>
              Book Value
            </Button>
            <Button rightIcon={<FaLightbulb />} colorScheme='green' variant='solid'>
              Book Value
            </Button>
          </Stack>
      </div>
      <div className={styles.bookvalue}>
          <Stack direction='row' spacing={8}>
            <Button rightIcon={<FaLightbulb />} colorScheme='green' variant='solid'>
              Book Value
            </Button>
            <Button rightIcon={<FaLightbulb />} colorScheme='green' variant='solid'>
              Book Value
            </Button>
            <Button rightIcon={<FaLightbulb />} colorScheme='green' variant='solid'>
              Book Value
            </Button>
            <Button rightIcon={<FaLightbulb />} colorScheme='green' variant='solid'>
              Book Value
            </Button>
          </Stack>
      </div>
    </div>
  );
};

export default HeroSection;