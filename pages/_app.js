import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
/**
 * The `getLayout` function gets the layout defined at the page level, if available\
 * and the SessionProvider wraps the page component with the session object which is used as a protected route
 */

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout( <SessionProvider session={pageProps.session}><Component {...pageProps} /></SessionProvider> );
}

export default MyApp
