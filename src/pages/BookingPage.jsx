import { Fragment } from "react";
import BookingForm from "../components/BookingForm";

function BookingPage({
  date,
  availableTimes,
  selectedTime,
  guests,
  occasion,
  setDate,
  dispatch,
  setSelectedTime,
  setGuests,
  setOccasion,
  handleSubmit,
}) {
  return (
    <Fragment>
      <BookingForm
        date={date}
        availableTimes={availableTimes}
        guests={guests}
        occasion={occasion}
        setDate={setDate}
        dispatch={dispatch}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        setGuests={setGuests}
        setOccasion={setOccasion}
        handleSubmit={handleSubmit}
      />
    </Fragment>
  );
}

export default BookingPage;
