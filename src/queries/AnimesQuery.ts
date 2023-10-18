import { gql } from "urql";

const AnimesQuery = (page: number | string) => `
  query {
    Page(page: ${page}, perPage: 12) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    media(type: ANIME, isAdult: false, sort: TRENDING_DESC) {
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
