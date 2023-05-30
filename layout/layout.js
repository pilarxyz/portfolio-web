import Head from 'next/head';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout({
  children,
  title = '',
                               }) {
  title = `${title && `${title} —`} Portofolio`
  return (
      <>
          <Head>
              <meta charSet="UTF-8"/>
              <title>{title}</title>
              <meta name="description" content="Portofolio" />
              <meta name="keywords" content="HTML,CSS,JavaScript,Python,SQL,MySQL,PostgreSQL,MongoDB,Redis,Flask,Falcon,Tailwind,TailwindCSS,Bootstrap" />
              <meta name="author" content="Pilar" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="flex flex-col min-h-screen">
              <Navbar />
              {children}
              <Footer />
          </div>
      </>
  )
}