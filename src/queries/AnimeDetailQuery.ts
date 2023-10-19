const AnimeDetailQuery = (id: string) => `
  query {
    Media(id: ${id}) {
      id
      title {
        romaji
        english
        userPreferred
      } 
      coverImage {
        large
        color
      }
      seasonYear
      genres
      averageScore
      episodes
      description
      format
      studios(isMain: true) {
        edges {
          id
          node {
            id
            name
          }
        }
      }
      bannerImage
    }
  }`;

export default AnimeDetailQuery;
