
// Components
import NavBar from "./components/NavBar";
import WelcomeSection from "./components/WelcomeSection";
import CaringNotice from "./components/CaringNotice";
import AdvertiseSection from "./components/AdvertiseSection";
import TopSellingProduct, {Product} from "./components/TopSellingProduct";
import BuyingNotice from "./components/BuyingNotice";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

// Styles
import {GlobalStyle, Wrapper} from "./App.styles";

import chau from './assets/chau-xinh-xan.png';

const products: Product[] = [
  {imageUrl: chau, name: "Sen đá cánh bướm", price: 35000},
  {imageUrl: chau, name: "Sen đá cánh bướm", price: 35000},
  {imageUrl: chau, name: "Sen đá cánh bướm", price: 35000}
]

function App() {

  return (
    <>
      <GlobalStyle/>
      <Wrapper className="App">
        <NavBar/>
        <WelcomeSection/>
        <CaringNotice/>
        <AdvertiseSection/>
        <TopSellingProduct products={products}/>
        <BuyingNotice/>
        <Gallery/>
        <Footer/>
      </Wrapper>
    </>
  )
}

export default App
