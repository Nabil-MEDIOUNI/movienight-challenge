import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useClickOutside } from '../../hooks';

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 stroke-sky-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const Search: React.FC = () => {
  const router = useRouter();
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useClickOutside(searchContainerRef, () => setIsOpen(false));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
    handleUpdateHistory(query);
    router.push(`/search?q=${query}`);
  };

  const handleUpdateHistory = (query: string) => {
    const savedHistory = [...history];

    if (query) {
      if (savedHistory.includes(query)) {
        savedHistory.splice(savedHistory.indexOf(query), 1);
      }
      savedHistory.unshift(query);
      if (savedHistory.length > 5) {
        savedHistory.pop();
      }
      setHistory(savedHistory);
      localStorage.setItem('history', JSON.stringify(savedHistory));
    }
  };

  useEffect(() => {
    const savedHistory = localStorage.getItem('history');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    if (router.isReady) {
      if (router.asPath.startsWith('/search')) {
        const query = router.query.q?.toString();
        if (query !== undefined && query !== null && query.length > 0) {
          setQuery(query);
        } else {
          router.push('/');
        }
      }
    }
  }, [router]);

  return (
    <div
      data-testid="search-form"
      className="relative"
      ref={searchContainerRef}
    >
      <form
        onSubmit={handleSearch}
        className={`text-white relative w-full flex items-center rounded-lg shadow-sm py-2 pl-2 pr-3 z-50 bg-white highlight-white/5 transition duration-300 ease-in-out`}
      >
        <SearchIcon />
        <input
          type="text"
          className="flex-1 bg-transparent focus:outline-none border-0 mx-2 text-sm leading-6 text-slate-400"
          placeholder="Rechercher un film, un r??alisteur, un acteur"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />
      </form>
      {history.length > 0 && (
        <div
          className={`${
            isOpen
              ? 'visible z-40 opacity-100'
              : 'invisible opacity-0 -z-10 translate-y-[-2rem]'
          } absolute inset-x-0 top-5 rounded-lg pt-5 pb-2 bg-white transition duration-300 ease-in-out`}
        >
          <ul>
            <span className="block font-light text-sm tracking-widest uppercase my-2 px-3">
              Recherches r??centes
            </span>
            {history?.map((item) => (
              <li key={item}>
                <Link href={`/search?q=${item}`}>
                  <a className="block font-medium leading-none px-3 py-2 bg-white hover:bg-slate-700 transition-colors duration-300 ease-in-out">
                    {item}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
