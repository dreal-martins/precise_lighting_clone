import '../styles/globals.css';
import Layout from '../components/Layout';
import { Context } from '../components/context/Context';

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  );
}

export default MyApp;
