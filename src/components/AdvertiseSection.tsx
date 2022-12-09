import {Wrapper} from "./AdvertiseSection.styles";

import chauXinhXan from "../assets/chau-xinh-xan.png";

import {Button, ButtonType} from "./Utils";

const AdvertiseSection = () => {
  return (
    <Wrapper>
      <img src={chauXinhXan} alt="advertise image"/>
      <div className="info">
        <div>
          <span className="small-text">Đồng giá </span><span className="big-text">35K</span>
        </div>
        <p>Sen Đá size bầu kèm chậu đất nung<br/> mua 2 chậu đi kèm bao bì xinh xắn</p>
        <div>
          <Button text="Xem Ngay" buttonType={ButtonType.GREEN} href="javascript:void(0);"/>
        </div>
      </div>
    </Wrapper>
  )
}

export default AdvertiseSection;