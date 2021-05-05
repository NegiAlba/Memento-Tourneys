import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { Button } from '@chakra-ui/button'
import { Box, Center, Heading, Text } from '@chakra-ui/layout'


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Center>
        <Box maxW="32rem">
          <Heading mb={4}>Bienvenue sur Memento Tourneys !</Heading>
          <Text fontSize="xl">
            L'objectif du site est de permettre à la communauté de participer à des tournois
            organisés par eux-mêmes, mais aussi de pouvoir se mesurer au reste de la communauté
          </Text>
          <Link href='/tourneys/'>
            <Button size="lg" colorScheme="green" mt="24px">
              Accéder à la page des tournois
            </Button>
          </Link>
        </Box>
      </Center>
      <Heading size="lg">
      </Heading>
    </Layout>
  )
}