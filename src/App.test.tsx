import { render } from "@testing-library/react";
import App from "./App";
import React from "react";

test("renders hello world", () => {
  expect(render(<App />).container).toHaveTextContent("hello world");
});
