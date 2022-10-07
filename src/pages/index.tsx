import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { Layout, Banner, MovieList } from '@components';

type Props = {
  upcoming: ResponsePaginationType & { results: MovieSummaryType[] };
  trending: ResponsePaginationType & { results: MovieSummaryType[] };
  imageURL: string;
};

const Home: NextPage<Props> = ({ upcoming, trending, imageURL }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <div className="container">
          <div className="container">
            <Banner movie={upcoming.results[0]} imageURL={imageURL} />
          </div>
          <div className="container">
            <MovieList
              header="À l’affiche cette semaine"
              movies={upcoming}
              imageURL={imageURL}
            />
          </div>
          <div className="container mt-14">
            <MovieList
              header="Les films les mieux notés"
              movies={trending}
              imageURL={imageURL}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const upcoming = await fetch(
    `${process.env.BASE_URL}/movie/upcoming?api_key=${process.env.TMDB_API_KEY}`,
  ).then((res) => res.json());

  const trending = await fetch(
    `${process.env.BASE_URL}/trending/all/week?api_key=${process.env.TMDB_API_KEY}`,
  ).then((res) => res.json());

  return {
    props: {
      upcoming,
      trending,
      imageURL: `${process.env.TMDB_IMAGE_URL}/t/p/original`,
    },
  };
};

export default Home;
