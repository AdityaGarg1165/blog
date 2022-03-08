import Navbar from './navbar'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar/>
    <Component {...pageProps} />
    <div className={styles.body}>
    </div>
    </>
  
}


export default MyApp
