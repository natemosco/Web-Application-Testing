import React from 'react';
// import ReactDOM from 'react-dom';
import { render, findAllByTestId } from "@testing-library/react"
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test("checking balls and strikes display fields exist", () => {
  const container = render(<App></App>);

  findAllByTestId(container, "present")
})

test("buttons created for scorekeeping === 4 in total", () => {
  const { findAllByTitle } = render(<App></App>);
  let length;
  findAllByTitle("button")
    .then(res => {
      length = res.length
      expect(length).toBe(4)
    })
})




