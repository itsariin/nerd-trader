import React from 'react'
import styles from './Faq.module.css'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'



const Faq = () => {
  return (
    <div className={styles.FAQcontainer}>
      <div className={styles.headerF}>
        <h1 className={styles.h1_class}>FAQs</h1>
        <p className={styles.p_class}>Here’s a list of the most common client questions. If you can’t find an answer to your question, please don’t hesitate to contact us.</p>

      </div>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                What is Stock Analysis ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Stock analysis is the process of evaluating information to make informed investment decisions. It involves assessing factors like financial statements, market trends, and company news to determine a stock's value and potential. This can be done through fundamental analysis, which looks at a company's financial health, or technical analysis, which examines historical price data to predict future movements. Both methods help investors decide whether to buy, sell, or hold stocks.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
              Do you offer a free trial ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Stock Analysis is a stock market research platform designed to help you make informed investment decisions. It provides data-driven insights, real-time market analysis, and access to a vibrant investor community
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
              How much Stock Analysis Cost?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          The cost of stock analysis can vary depending on the resources and methods used. If you're conducting analysis on your own, the expenses may be minimal. This could involve purchasing books, enrolling in online courses, or investing in software tools tailored for research purposes. These costs are usually one-time purchases or subscriptions.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Section 4 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Section 5 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Faq