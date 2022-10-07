import React from 'react';
import type { ReactElement } from 'react';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { Layout, MovieCard, MovieImage } from '@components';

const Movie = ({
  movie,
  similars,
  videos,
  imageURL,
}: {
  movie: MovieDetailType;
  similars: ResponsePaginationType & { results: MovieSummaryType[] };
  videos: MovieDetailType & { results: VideoType[] };
  imageURL: string;
}) => {
  return (
    <div className="mx-auto my-5">
      <Head>
        <title>{movie.title}</title>
      </Head>
      <div className="grid grid-cols-5 gap-3">
        <div className="relative hidden md:block md:col-span-2 order-2 aspect-auto rounded-lg overflow-hidden">
          <MovieImage source={imageURL + movie.poster_path} alt={movie.title} />
        </div>
        <div className="rounded-lg overflow-hidden col-span-5 md:col-span-3">
          <div className="relative z-50">
            <h1 className="font-bold text-4xl text-white font-Archivo-Bold">
              {movie.title}
            </h1>
            <ul className="my-2">
              {movie.genres.map((genre) => (
                <p
                  key={genre.name}
                  className="text-white inline mr-1 after:content-[','] last:after:content-['']"
                >
                  {genre.name}
                </p>
              ))}
            </ul>
            <span className="text-white mb-2">{movie.release_date}</span>
            <br />
            <div className="mt-4 mb-6">
              <a
                className="bg-white text-black py-2 px-5 rounded-sm text-base"
                href={`https://www.youtube.com/watch?v=${videos.results[0].key}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Regarder
              </a>
            </div>
            <p className="text-white mb-5">{movie.overview}</p>
            <div>
              <ul>
                <span className="text-white font-bold mr-2">
                  Screenplay, Story
                </span>
                <br />
                {movie.production_companies.map((company) => (
                  <li
                    key={company.name}
                    className="inline text-white  mr-1 after:content-[','] last:after:content-['']"
                  >
                    {company.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-10">
        <h2 className="mb-5 text-white text-xl">Films Similaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {similars.results.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={{
                ...movie,
                backdrop_path: imageURL + movie.backdrop_path,
                poster_path: imageURL + movie.poster_path,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext,
) => {
  const { id } = ctx.query;
  const movie = await fetch(
    `${process.env.BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`,
  ).then((res) => res.json());

  const similars = await fetch(
    `${process.env.BASE_URL}/movie/${id}/similar?api_key=${process.env.TMDB_API_KEY}`,
  ).then((res) => res.json());

  const videos = await fetch(
    `${process.env.BASE_URL}/movie/${id}/videos?api_key=${process.env.TMDB_API_KEY}`,
  ).then((res) => res.json());

  return {
    props: {
      id,
      movie,
      similars,
      videos,
      imageURL: `${process.env.TMDB_IMAGE_URL}/t/p/original`,
    },
  };
};

Movie.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Movie;
