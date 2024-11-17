import Header from "./components/header/Header"
import './components/global.css'
import Hero from "./components/hero/Hero"
import LatestEpisodes from "./components/latest/LatestEpisodes"
import Jacob from "./components/jacob/Jacob"
import EmailForm from "./components/emailform/EmailForm"
import Reviews from "./components/reviews/Reviews"
import Footer from "./components/footer/Footer"
function App() {
  return(
    <>
    <Header/>
    <Hero/>
    <LatestEpisodes/>
    <Jacob/>
    <EmailForm/>
    <Reviews/>
    <Footer/>
    </>
  )
  };

export default App
