import React from 'react';
import type { ReactElement } from 'react';
import Link from 'next/link';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Layout, MovieCard } from '@components';

const Search = ({
  movies,
  imageURL,
}: {
  movies: ResponsePaginationType & { results: MovieSummaryType[] };
  imageURL: string;
}) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{router.query.q} - Search Results</title>
      </Head>
      <div className="mx-auto">
        <h1 className="mb-4 text-3xl">
          <span className="font-bold text-white uppercase">
            {router.query.q}
          </span>
          <br />
          {movies.total_results} résultats
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-14">
          {movies.results.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movie={{
                  ...movie,
                  backdrop_path: imageURL + movie.backdrop_path,
                  poster_path: imageURL + movie.poster_path,
                }}
                horizontal
              />
            );
          })}
        </section>
        <nav
          className="flex items-center justify-center mb-5"
          role="navigation"
        >
          {movies.page - 1 > 0 && (
            <Link href={`/search?q=${router.query.q}&page=${movies.page - 1}`}>
              <a className="block bg-slate-800 px-3 py-2 rounded-full mx-1">
                Previous Page ({movies.page - 1})
              </a>
            </Link>
          )}
          <Link href={`/search?q=${router.query.q}&page=${movies.page + 1}`}>
            <a className="block bg-slate-800 px-3 py-2 rounded-full mx-1">
              Next Page ({movies.page + 1})
            </a>
          </Link>
        </nav>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext,
) => {
  const query = ctx.query.q;
  const page = ctx.query.page || 1;
  const movies = await fetch(
    `${process.env.BASE_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}&page=${page}`,
  ).then((res) => res.json());

  return {
    props: {
      movies,
      imageURL: `${process.env.TMDB_IMAGE_URL}/t/p/original`,
    },
  };
};

Search.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Search;
