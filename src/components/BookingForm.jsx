import Button from "./Button";
import { IoIosArrowDropdown } from "react-icons/io";

function BookingFrom({
  date,
  availableTimes,
  guests,
  occasion,
  setDate,
  selectedTime,
  setSelectedTime,
  dispatch,
  setGuests,
  setOccasion,
  handleSubmit,
}) {
  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit({ date, selectedTime, guests, occasion });
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    dispatch({ type: "dateChange", payload: selectedDate });
  };

  return (
    <form onSubmit={submitForm} className="booking_form">
      <h1>Book a table</h1>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleDateChange}
        />
      </div>

      <div className="form-group select">
        <label htmlFor="time">Available Times</label>
        <div className="select">
          <select id="time" onChange={(e) => setSelectedTime(e.target.value)}>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
          <div className="icon-container">
            <IoIosArrowDropdown />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={guests}
          placeholder="1"
          min="1"
          max="10"
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <div className="select">
          <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
          <div className="icon-container">
            <IoIosArrowDropdown />
          </div>
        </div>
      </div>

      <div className="form-group">
        <Button
          type="submit"
          desc="Make Your reservation"
          variety="secondary"
        />
      </div>
    </form>
  );
}

export default BookingFrom;
