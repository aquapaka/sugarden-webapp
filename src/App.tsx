
// Components
import NavBar from "./components/NavBar";
import WelcomeSection from "./components/WelcomeSection";
import CaringNotice from "./components/CaringNotice";
import AdvertiseSection from "./components/AdvertiseSection";
import TopSellingProduct, {Product} from "./components/TopSellingProduct";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

// Styles
import {GlobalStyle, Wrapper, WrapperOfApp} from "./App.styles";

import potCanhBuom from './assets/pots/canh buom.png';
import potPhatBa from './assets/pots/phat ba.png';
import potXienThit from './assets/pots/xien thit.png';
import potMoroe from './assets/pots/moroe.png';
import potTaiTho from './assets/pots/tai tho.png';
import potNau from './assets/pots/nau.png';

const products: Product[] = [
  {imageUrl: potCanhBuom, name: "Sen đá cánh bướm", price: 35000},
  {imageUrl: potPhatBa, name: "Sen đá phật bà", price: 35000},
  {imageUrl: potXienThit, name: "Sen đá xiên thịt", price: 35000},
  {imageUrl: potMoroe, name: "Sen đá moroe", price: 35000},
  {imageUrl: potTaiTho, name: "Sen đá tai thỏ", price: 35000},
  {imageUrl: potNau, name: "Sen đá nâu", price: 35000},
]

function App() {

  return (
    <>
      <GlobalStyle/>
      <Wrapper className="App">
        <WrapperOfApp>
          <NavBar/>
          <WelcomeSection/>
          <CaringNotice/>
          <AdvertiseSection/>
          <TopSellingProduct products={products}/>
          <Gallery/>
          <Footer/>
        </WrapperOfApp>
      </Wrapper>
    </>
  )
}

export default App
