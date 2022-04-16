import react from 'react'
import '../styles/globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from '../components/Layout'
function MyApp({ Component, pageProps }) {
  
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp