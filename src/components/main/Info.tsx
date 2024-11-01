import { FaRegPlayCircle, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ButtonBuy, ContainerInfo, MiniAvatar } from "../styled.components";
import BlackWidow from "../../assets/black-widow.png";
import { Context } from "../../context/AppContext";
const Info = () => {
  const history = useNavigate();
  const { state } = useContext(Context);

  const goToDetails = (): void => {
    history("/detail/2");
  };
  return (
    <ContainerInfo height={50}>
      <section className="icon-info">
        <FaRegPlayCircle size={20} color={"red"} />
      </section>
      <section className="title-info">{state.name}</section>
      <section className="details-info">
        <section className="list">
          <div>2020</div>
          <div>Fantastic</div>
          <div>{state.time}</div>
        </section>
      </section>
      <section className="star">
        <FaStar size={20} color={"orange"} />
        <FaStar size={20} color={"orange"} />
        <FaStar size={20} color={"orange"} />
        <FaStar size={20} color={"orange"} />
        <FaStar size={20} color={"orange"} />
      </section>

      <section className="description">
        <div className="description-title">Plot Sumary</div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          praesentium, est cupiditate officiis dolor illo sed fugit natus
          possimus architecto eius, laudantium iure facere maiores iste harum
          quasi explicabo necessitatibus!
        </div>
      </section>
      <section className="description">
        <div className="description-title">Cast</div>
        <div className="images">
          {[1, 2, 3, 4].map((item) => (
            <MiniAvatar key={item} src={BlackWidow} />
          ))}
        </div>
      </section>
      <section className="button-buy">
        <ButtonBuy onClick={goToDetails}>Comprar</ButtonBuy>
      </section>
    </ContainerInfo>
  );
};

export default Info;
