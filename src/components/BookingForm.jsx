import { useState } from "react";
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
  const [isValidDate, setIsValidDate] = useState(true);
  const [isValidGuests, setIsValidGuests] = useState(true);

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit({ date, selectedTime, guests, occasion });
  };

  const handleDateChange = (event) => {
    setIsValidDate(true);

    const selectedDate = event.target.value;
    if (new Date(selectedDate) < new Date()) {
      setIsValidDate(false);
    }

    setDate(selectedDate);
    dispatch({ type: "dateChange", payload: selectedDate });
  };

  const handleGuestsChange = (e) => {
    setIsValidGuests(true);

    const guests = +e.target.value;
    if (guests < 1 || guests > 10) {
      setIsValidGuests(false);
    }

    setGuests(guests);
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
          placeholder="MM/DD/YYYY"
          onChange={handleDateChange}
          required
        />
        {!isValidDate && <span>Date must be today or in the future</span>}
      </div>

      <div className="form-group select">
        <label htmlFor="time">Available Times</label>
        <div className="select">
          <select
            id="time"
            onChange={(e) => setSelectedTime(e.target.value)}
            required
          >
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
          onChange={handleGuestsChange}
        />
        {!isValidGuests && <span>Party size must be between 1 and 10</span>}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <div className="select">
          <select
            id="occasion"
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
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
          disabled={!isValidDate || !isValidGuests}
          aria-label="On Click"
        />
      </div>
    </form>
  );
}

export default BookingFrom;
