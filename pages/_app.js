import '@styles/globals.css'
import Header from '/components/Header';
import Footer from '/components/Footer';

function Application({ Component, pageProps }) {
  return (
    <>
      <Header title="Mark Lu"/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default Application
