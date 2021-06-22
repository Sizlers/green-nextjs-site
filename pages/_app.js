import 'tailwindcss/tailwind.css'
import Nav from '../components/Nav'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;900&family=Viaoda+Libre&display=swap" rel="stylesheet" />
      </Head>
      <Nav />
      <Component {...pageProps} />

      <footer className="p-5 border-t w-full text-center text-lg font-extralight mt-16">
        © Tom Sisman 2021
      </footer>
    </>
  )
}

export default MyApp
