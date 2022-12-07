import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head'
import React from 'react'

function App({Component, pageProps}: AppProps): JSX.Element {
    return <>
        <Head>
            <title>My best app</title>
            <link key={1} rel="icon" href="/favicon.ico"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&family=Roboto:wght@100&display=swap"
                rel="stylesheet"/>
        </Head>
        <Component {...pageProps} />
    </>
        ;
}

export default App;