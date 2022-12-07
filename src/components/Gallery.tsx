import gallery0 from "../assets/gallery/gallery_0.jpg";
import gallery1 from "../assets/gallery/gallery_1.jpg";
import gallery2 from "../assets/gallery/gallery_2.jpg";
import gallery3 from "../assets/gallery/gallery_3.jpg";

import {Wrapper, ImageRow} from "./Gallery.styles";

const Gallery = () => {
  return (
    <Wrapper>
      <h2>#SuGarden</h2>
      <p>Chăm sóc Sen Đá khỏe mạnh</p>
      <ImageRow>
        <img src={gallery0} alt="Succulent image"/>
        <img src={gallery1} alt="Succulent image"/>
        <img src={gallery2} alt="Succulent image"/>
        <img src={gallery3} alt="Succulent image"/>
      </ImageRow>
    </Wrapper>
  )
}

export default Gallery;