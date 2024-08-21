import { useLocation } from "react-router-dom";

function ConfirmedBooking() {
  const { state } = useLocation();
  return (
    <section id="booking-confirmation">
      <div className="details">
        <h1>Your booking has been confirmed</h1>
        <p>
          For {state.guests} guests on {state.date} at {state.selectedTime} to
          celebrate {state.occasion}
        </p>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
