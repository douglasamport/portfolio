import NavBar from '../components/NavBar'
import '../styles/index.scss'
//import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
    <div className="container">
      <Component {...pageProps} />
    </div>
    </>
  )
}

export default MyApp
