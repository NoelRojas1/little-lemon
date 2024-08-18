import Julia from "../assets/testimonials/profile_01.jpg";
import Janice from "../assets/testimonials/profile_02.jpg";
import Peter from "../assets/testimonials/profile_03.jpg";
import Jonathan from "../assets/testimonials/profile_04.jpg";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  const data = [
    {
      rating: 5,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A incidunt voluptas rerum expedita quam natus, sint impedit similique fugit architecto quaerat fugiat corporis id necessitatibus, pariatur libero dolorem accusantium cumque.",
      img: Julia,
      name: "Julia",
    },
    {
      rating: 5,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A incidunt voluptas rerum expedita quam natus, sint impedit similique fugit architecto quaerat fugiat corporis id necessitatibus, pariatur libero dolorem accusantium cumque.",
      img: Janice,
      name: "Janice",
    },
    {
      rating: 5,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A incidunt voluptas rerum expedita quam natus, sint impedit similique fugit architecto quaerat fugiat corporis id necessitatibus, pariatur libero dolorem accusantium cumque.",
      img: Peter,
      name: "Peter",
    },
    {
      rating: 5,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A incidunt voluptas rerum expedita quam natus, sint impedit similique fugit architecto quaerat fugiat corporis id necessitatibus, pariatur libero dolorem accusantium cumque.",
      img: Jonathan,
      name: "Jonathan",
    },
  ];

  return (
    <section id="testimonials">
      <div className="testimonials_header">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials_container">
        {data.map((testimonial) => (
          <div key={testimonial.name} className="testimonial">
            <p className="testimonial_rating">
              Rating: {testimonial.rating} <FaStar />
            </p>
            <div>
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="testimonial_img"
              />
              <p className="testimonial_name">{testimonial.name}</p>
            </div>
            <p className="testimonial_review">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
