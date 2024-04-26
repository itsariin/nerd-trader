import React from 'react';
import styles from './NewsSection.module.css';
import { Card,  CardBody,  Stack, Image, Heading, Text,Divider } from '@chakra-ui/react'

const NewsSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.newshead}>
                <h1 className={styles.h1_class}>News</h1>
                <img
                    className={styles.logo}
                    loading="lazy"
                    alt=""
                    src="/paper.png"
                />

            </div>
            <div className={styles.newshere}>
                <div>
                    <div className={styles.newsC}>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src="/paper.png"
                                alt='PAPER'
                                boxSize="75px"
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='md'>News Headline</Heading>

                                    <Text py='2'>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </Text>
                                </CardBody>
                            </Stack>
                        </Card>
                    </div>
                    <div className={styles.newsC}>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src="/paper.png"
                                alt='PAPER'
                                boxSize="75px"
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='md'>News Headline</Heading>

                                    <Text py='2'>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </Text>
                                </CardBody>
                            </Stack>
                        </Card>
                    </div>
                    <div className={styles.newsC}>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src="/paper.png"
                                alt='PAPER'
                                boxSize="75px"
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='md'>News Headline</Heading>

                                    <Text py='2'>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </Text>
                                </CardBody>
                            </Stack>
                        </Card>
                    </div>
                    <div className={styles.newsC}>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src="/paper.png"
                                alt='PAPER'
                                boxSize="75px"
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='md'>News Headline</Heading>

                                    <Text py='2'>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </Text>
                                </CardBody>
                            </Stack>
                        </Card>
                    </div>
                </div>
                <div>
                    <div className={styles.newsC}>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src="/paper.png"
                                alt='PAPER'
                                boxSize="75px"
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='md'>News Headline</Heading>

                                    <Text py='2'>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </Text>
                                </CardBody>
                            </Stack>
                        </Card>
                    </div>
                    <div className={styles.newsC}>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src="/paper.png"
                                alt='PAPER'
                                boxSize="75px"
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='md'>News Headline</Heading>

                                    <Text py='2'>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </Text>
                                </CardBody>
                            </Stack>
                        </Card>
                    </div>
                    <div className={styles.newsC}>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src="/paper.png"
                                alt='PAPER'
                                boxSize="75px"
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='md'>News Headline</Heading>

                                    <Text py='2'>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </Text>
                                </CardBody>
                            </Stack>
                        </Card>
                    </div>
                    <div className={styles.newsC}>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src="/paper.png"
                                alt='PAPER'
                                boxSize="75px"
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='md'>News Headline</Heading>

                                    <Text py='2'>
                                        Lorem ipsum dolor sit amet consectetur.
                                    </Text>
                                </CardBody>
                            </Stack>
                        </Card>
                    </div>
                </div>
            </div>
        <Divider colorScheme= "blackAlpha"/>



        </div>
    )
}

export default NewsSection;