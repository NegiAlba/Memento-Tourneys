import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Container, Text } from "@chakra-ui/react"
import { DarkModeSwitch } from './DarkModeSwitch'
import { useAuth } from '@/lib/auth'

const name = 'Negi Alba'
export const siteTitle = 'Memento Tourney\'s'

export default function Layout({ children, home }) {
  const auth = useAuth();
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
      </Head>
      <header className={styles.header}>
      <DarkModeSwitch mr={3}/>
            <Text
              bgGradient="linear(to-l, yellow.400,pink.200)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
              mt="4rem"
            >
              Memento Tourney
            </Text>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </Container>
  )
}