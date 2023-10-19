const AnimesQuery = (page: number | string, genre?: string) => `
  query {
    Page(page: ${page}, perPage: 12) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(type: ANIME, sort: TRENDING_DESC${
        genre ? `, genre:"${genre}"` : ""
      }) {
        id
        title {
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
      }
    }
  }`;

export default AnimesQuery;
