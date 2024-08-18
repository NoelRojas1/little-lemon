import HeroImage from "../assets/restaurant-chef-B.jpg";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const hanldeClick = () => {
    navigate("/booking");
  };

  return (
    <section id="hero">
      <div className="hero_container">
        <div className="hero_header">
          <div>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              repellat exercitationem itaque dolores nesciunt sit, voluptate,
              magni blanditiis quibusdam quia earum? Eum, voluptates? Ex in,
              perferendis minus debitis a unde.
            </p>
          </div>
          <Button
            desc={"Reserve a Table"}
            type="secondary"
            onClick={hanldeClick}
          />
        </div>
        <div className="hero_image">
          <img src={HeroImage} alt="a chef in the restaurant" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
