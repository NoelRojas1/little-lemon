import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={[]} />);
  const headingElement = screen.getByText("Book a table");
  expect(headingElement).toBeInTheDocument();
});

test("Shows message when date is not today or in the future", () => {
  render(
    <BookingForm
      availableTimes={[]}
      date={new Date().toISOString().split("T")[0]}
      setDate={() => {}}
      dispatch={() => {}}
    />
  );
  const dateInput = screen.getByPlaceholderText("MM/DD/YYYY");
  const submitBtn = screen.getByText("Make Your reservation");

  fireEvent.change(dateInput, { target: { value: "2022-02-08" } });

  const errorMessage = screen.getByText("Date must be today or in the future");
  expect(errorMessage).toBeInTheDocument();

  expect(submitBtn).toBeDisabled();
});

test("Shows message when guests is not between 1 and 10", () => {
  render(<BookingForm availableTimes={[]} setGuests={() => {}} />);
  const guestsInput = screen.getByPlaceholderText("1");
  const submitBtn = screen.getByText("Make Your reservation");

  fireEvent.change(guestsInput, { target: { value: "12" } });

  const errorMessage = screen.getByText("Party size must be between 1 and 10");
  expect(errorMessage).toBeInTheDocument();

  expect(submitBtn).toBeDisabled();
});
