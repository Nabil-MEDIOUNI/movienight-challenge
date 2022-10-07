import React from 'react';
import type { DocumentContext } from 'next/document';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          <meta
            name="description"
            content="themoviedb.org API example project with TypeScript, Tailwind CSS, and Next.js"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="antialiased text-slate-500 text-slate-400 bg-white bg-slate-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
