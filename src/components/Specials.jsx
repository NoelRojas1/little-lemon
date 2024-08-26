import Button from "./Button";
import GreekSalad from "../assets/greek-salad.jpg";
import LemonDessert from "../assets/lemon-dessert.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import { MdDeliveryDining } from "react-icons/md";

function Specials() {
  const data = [
    {
      img: GreekSalad,
      title: "Greek Salad",
      price: 12.99,
      desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      img: Bruchetta,
      title: "Bruchetta",
      price: 5.99,
      desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      img: LemonDessert,
      title: "Lemmon Dessert",
      price: 5.0,
      desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <section id="specials">
      <div className="specials_header">
        <h2>Specials</h2>
        <Button desc="Online Menu" variety="primary" aria-label="On Click" />
      </div>
      <div className="specials_items">
        {data.map((item) => (
          <div key={item.title} className="specials_item">
            <div>
              <img src={item.img} alt={item.desc} />

              <div className="specials_item-header">
                <h3>{item.title}</h3>
                <p>$ {item.price.toFixed(2)}</p>
              </div>

              <p>{item.desc}</p>
            </div>
            <div className="specials_item-cta">
              <a href="#">
                Order a delivery <MdDeliveryDining />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
