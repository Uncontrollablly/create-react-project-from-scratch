import { render } from "@testing-library/react";
import App from "./App";

test("renders hello world", () => {
  expect(render(<App />).container).toHaveTextContent("hello world");
});
