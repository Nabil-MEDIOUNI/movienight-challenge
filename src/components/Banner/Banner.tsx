import React from 'react';

import Link from 'next/link';

type Props = {
  imageURL: string;
  movie: any;
};

const Banner: React.FC<Props> = ({ movie, imageURL }) => {
  return (
    <div
      className="container relative bg-cover bg-center h-80 mb-20 rounded-lg"
      style={{ backgroundImage: `url(${imageURL + movie.backdrop_path})` }}
    >
      <div className="absolute bottom-5 left-5">
        <h2 className="text-white uppercase text-3xl font-bold mb-4">
          {movie.title}
        </h2>
        <button className="bg-white text-black py-2 px-5 rounded-lg text-sm">
          Regarder
        </button>
        <Link href="/movie/[id]" as={`/movie/${movie.id}`}>
          <a className="border border-white text-white py-2 px-5 ml-3 rounded-lg text-sm">
            En savoir plus
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
