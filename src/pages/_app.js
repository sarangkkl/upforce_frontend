import '@/styles/globals.css';
import { Navbar } from '@/components'
import  GlobalState  from '@/context/GlobalState';


export default function App({ Component, pageProps }) {
  return (
    <>
    <GlobalState>
    <Navbar />
    <Component {...pageProps} />
    </GlobalState>
  
  </>
  )
}
