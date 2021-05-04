import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {  getAllGames, getAllTourneys } from '@lib/db-admin'
export async function getStaticProps(context) {
  const tourneyId = context.params.tourneyId
  const { games } = await getAllGames(tourneyId)
  return {
    props: {
      initialGames: games,
    },
    revalidate: 1,
  }
}
export async function getStaticPaths() {
  const { tourneys } = await getAllTourneys()
  const paths = tourneys.map((tourney) => ({
    params: {
      tourneyId: tourney.id.toString(),
    },
  }))
  return {
    paths,
    fallback: true,
  }
}

const GamesPage = ({ initialGames }) => {
  const router = useRouter()
  return <Box>Tourney ID: ${router.query.tourneyId}</Box>
}
export default GamesPage