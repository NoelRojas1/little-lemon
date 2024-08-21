import { useEffect, useReducer, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import { fetchAPI, submitAPI } from "../utils/timeAvailability";
import ConfirmedBooking from "../pages/ConfirmedBooking";

function Main() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("birthday");

  const navigate = useNavigate();

  function updateTimes(state, action) {
    switch (action.type) {
      case "initialize":
        return action.payload;
      case "dateChange":
        const times = fetchAPI(new Date(action.payload));
        return times;
      default:
        return state;
    }
  }

  function initializeTimes() {
    const times = fetchAPI(new Date());
    setSelectedTime(times[0].split(" ")[0]);
    dispatch({ type: "initialize", payload: times });
  }

  function submitForm(formData) {
    const response = submitAPI(formData);
    if (response) {
      navigate("/booking-confirmation", { state: formData });
    }
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              date={date}
              availableTimes={availableTimes}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              guests={guests}
              occasion={occasion}
              setDate={setDate}
              dispatch={dispatch}
              setGuests={setGuests}
              setOccasion={setOccasion}
              handleSubmit={submitForm}
            />
          }
        />
        <Route path="/booking-confirmation" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
