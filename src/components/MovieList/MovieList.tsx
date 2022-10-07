import React from 'react';
import { MovieCard } from '@components';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type MovieListProps = {
  movies: ResponsePaginationType & { results: MovieSummaryType[] };
  imageURL: string;
  header: string;
};

const CustomLeftArrow = () => (
  <button
    style={{ backgroundColor: '#101010CC' }}
    className="absolute left-0 py-1 px-6 text-white rounded-full"
    onClick={(previous: any) => previous()}
  >
    {`<`}
  </button>
);

const CustomRightArrow = () => (
  <button
    style={{ backgroundColor: '#101010CC' }}
    className="absolute right-0 py-1 px-6 text-white rounded-full"
    onClick={(next: any) => next()}
  >
    {`>`}
  </button>
);

export const MovieList: React.FC<MovieListProps> = ({
  movies,
  imageURL,
  header,
}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="mx-auto my-5">
      <h2 className="mb-5 text-white text-xl">{header}</h2>
      <Carousel
        showDots={false}
        responsive={responsive}
        customLeftArrow={CustomLeftArrow()}
        customRightArrow={CustomRightArrow()}
        swipeable
      >
        {movies.results.map(
          (movie) =>
            movie.overview && (
              <div className="mr-4" key={movie.id}>
                <MovieCard
                  key={movie.id}
                  movie={{
                    ...movie,
                    backdrop_path: imageURL + movie.backdrop_path,
                    poster_path: imageURL + movie.poster_path,
                  }}
                />
              </div>
            ),
        )}
      </Carousel>
    </section>
  );
};
