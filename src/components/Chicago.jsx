import Image1 from "../assets/Mario-and-Adrian-A.jpg";
import Image2 from "../assets/Mario-and-Adrian-b.jpg";

function Chicago() {
  return (
    <section id="chicago">
      <div className="chicago_little-lemon">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.{" "}
        </p>
      </div>
      <div className="chicago_images">
        <img src={Image1} alt="Mario-and-Adrian-A" />
        <img src={Image2} alt="Mario-and-Adrian-b" />
      </div>
    </section>
  );
}

export default Chicago;
