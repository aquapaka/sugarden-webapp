
// Components
import NavBar from "./components/NavBar";
import WelcomeSection from "./components/WelcomeSection";
import CaringNotice from "./components/CaringNotice";
import TopSellingProduct from "./components/TopSellingProduct";
import BuyingNotice from "./components/BuyingNotice";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

// Styles
import {GlobalStyle, Wrapper} from "./App.styles";

function App() {

  return (
    <>
      <GlobalStyle/>
      <Wrapper className="App">
        <NavBar/>
        <WelcomeSection/>
        <CaringNotice/>
        <TopSellingProduct/>
        <BuyingNotice/>
        <Gallery/>
        <Footer/>
      </Wrapper>
    </>
  )
}

export default App
