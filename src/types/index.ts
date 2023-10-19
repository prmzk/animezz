export type AnimeList = {
  Page: {
    pageInfo: Pagination;
    media: Anime[];
  };
};

export type Anime = {
  id: number;
  title: { userPreferred: string };
  coverImage: {
    large: string;
    color: string;
  };
  seasonYear: number;
  description: string;
  genres: string[];
  averageScore: number;
  episodes?: number;
  format: string;
  studios: {
    edges: { id: number; node: { id: number; name: string } }[];
  };
};

export type Pagination = {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
};

export type GenreList = {
  GenreCollection: string[];
};
