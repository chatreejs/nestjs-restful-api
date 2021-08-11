export interface Movie {
  id: number;
  title: string;
  year: string;
  imdb: number;
}

export const moviesList: Movie[] = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    year: '1994',
    imdb: 9.2,
  },
  {
    id: 2,
    title: 'The Godfather',
    year: '1972',
    imdb: 9.1,
  },
  {
    id: 3,
    title: 'The Godfather: Part II',
    year: '1974',
    imdb: 9.0,
  },
];
