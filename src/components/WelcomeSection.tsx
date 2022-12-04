import { Wrapper } from "./WelcomeScreen.styles";

import mainPlant from '../assets/phat-ba-plant.png';
import logoSimpleWhite from '../assets/sugarden-logo-simple-white.png';

const WelcomeSection = () => {
  return (
    <Wrapper>
      <img className="main-plant" src={mainPlant}/>
      <div className="text-box">
        <div className="texts">
          <p className="small-text">Welcome to</p>
          <h1 className="big-text">SuGarden</h1>
        </div>
        <img className="logo" src={logoSimpleWhite}/>
      </div>
    </Wrapper>
  )
}

export default WelcomeSection;