import db from './firebase-admin';
export async function getAllGames(tourneyId) {
  try {
    const snapshot = await db
      .collection('games')
      .get();
    const games = [];
    snapshot.forEach((doc) => {
      games.push({ id: doc.id, ...doc.data() });
    });
    return { games };
  } catch (error) {
    return { error };
  }
}

export async function getAllMatchesFromGame(tourneyId, gameId) {
  try {
    const snapshot = await db
      .collection('matches')
      .where('tourneyId', '==', tourneyId)
      .where('gameId', '==', gameId)
      .get();
    const matches = [];
    snapshot.forEach((doc) => {
      matches.push({ id: doc.id, ...doc.data() });
    });
    return { matches };
  } catch (error) {
    return { error };
  }
}

export async function getAllTourneys() {
  const snapshot = await db.collection('tourneys').get()
  const tourneys = []
  snapshot.forEach((doc) => {
    tourneys.push({ id: doc.id, ...doc.data() })
  })
  return { tourneys }
}