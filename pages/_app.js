import $ from "jquery";
import { useEffect } from 'react';

// bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // importing bootstrap js .....
    import("bootstrap/dist/js/bootstrap");
  }, []);


  return (
    <>
      <Component {...pageProps} />
    </>    
  )
}

export default MyApp;
