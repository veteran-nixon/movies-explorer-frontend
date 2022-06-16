import AboutProject from "./AboutProject/AboutProject.js";
import Promo from "./Promo/Promo.js";
import Techs from "./Techs/Techs.js";
import AboutMe from "./AboutMe/AboutMe.js";
import Portfolio from "./Portfolio/Portfolio.js";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function Main() {
  return (
    <main className="main">
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  )
}

export default Main;
