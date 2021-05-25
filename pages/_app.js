import { Fragment } from 'react';
import Navigation from '../components/nav';
import '../styles/globals.css';
import '../styles/bootstrap.min.css';
// import "../styles/facebook";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
