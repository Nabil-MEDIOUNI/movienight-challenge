import React from 'react';

import Link from 'next/link';
import { Search } from '@components';

const Layout: React.FC = ({ children }: any) => {
  return (
    <div className="container">
      <header className="mb-14 container">
        <div className="container mx-auto flex items-center justify-between py-5 border-b border-slate-800">
          <div className="hidden md:block flex-initial w-auto">
            <Link href="/">
              <a className="text-3xl uppercase font-bold text-white font-Archivo">
                movienight
              </a>
            </Link>
          </div>
          <div className="flex-initial max-w-xl w-full">
            <Search />
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
