import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";
import { render, fireEvent } from "@testing-library/react";

test("App renders balls with initial state of 0", () => {
  const container = render(<App />);
  container.getByText(/balls: 0/i);
});

test("App renders strikes with initial state of 0", () => {
  const container = render(<App />);
  container.getByText(/strikes: 0/i);
});

test("Dashboard renders without crashing", () => {
  render(<Dashboard />);
});

test("Display renders without crashing", () => {
  render(<Display />);
});

test("Strike increases by 1 when clicked", () => {
  const container = render(<App />);
  const strikes = container.getByTestId("strike-value");
  const strikeButton = container.getByTestId("strike-btn");

  fireEvent.click(strikeButton);

  expect(strikes.textContent.toLowerCase()).toBe("strikes: 1");
});

test("Strike value resets to 0 when value exceeds 2", () => {
  const container = render(<App />);
  const strikes = container.getByTestId("strike-value");
  const strikeButton = container.getByTestId("strike-btn");

  fireEvent.click(strikeButton);
  fireEvent.click(strikeButton);
  expect(strikes.textContent.toLowerCase()).toBe("strikes: 2");
  fireEvent.click(strikeButton);
  expect(strikes.textContent.toLowerCase()).toBe("strikes: 0");
});

test("Foul button increases strikes by 1 when clicked", () => {
  const container = render(<App />);
  const strikes = container.getByTestId("strike-value");
  const foulButton = container.getByTestId("foul-btn");

  fireEvent.click(foulButton);
  expect(strikes.textContent.toLowerCase()).toBe("strikes: 1");
});

test("Foul button does not increase strike value when current value is 2", () => {
  const container = render(<App />);
  const strikes = container.getByTestId("strike-value");
  const foulButton = container.getByTestId("foul-btn");

  fireEvent.click(foulButton);
  fireEvent.click(foulButton);
  expect(strikes.textContent.toLowerCase()).toBe("strikes: 2");
  fireEvent.click(foulButton);
  expect(strikes.textContent.toLowerCase()).toBe("strikes: 2");
});
