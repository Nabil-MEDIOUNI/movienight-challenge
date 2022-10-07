/** @jest-environment jsdom */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from './Banner';

describe('Banner', () => {
  it('should renders the Banner', () => {
    const imageURL =
      'https://image.tmdb.org/t/p/original/aGBuiirBIQ7o64FmJxO53eYDuro.jpg';
    const movie = {
      adult: false,
      backdrop_path: '/jpipejVjqn7ifln05xeq9zpvprf.jpg',
      genre_ids: [27, 53, 9648],
      id: 717728,
      original_language: 'en',
      original_title: 'Jeepers Creepers: Reborn',
      overview:
        'Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.',
      popularity: 793.475,
      poster_path: '/aGBuiirBIQ7o64FmJxO53eYDuro.jpg',
      release_date: '2022-09-15',
      title: 'Jeepers Creepers: Reborn',
      video: false,
      vote_average: 5.8,
      vote_count: 98,
    };

    render(<Banner movie={movie} imageURL={imageURL} />);

    const movieTitle = screen.getByText(/Jeepers Creepers: Reborn/i);
    expect(movieTitle).toBeInTheDocument;
  });
});
