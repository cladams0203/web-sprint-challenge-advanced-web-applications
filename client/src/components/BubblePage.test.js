import React from "react";
import { render, screen } from "@testing-library/react";
// import { renderHook } from "@testing-library/react-hooks";
import BubblePage from "./BubblePage";
// import { useFetch } from "../utils/apiHook";
// import { api } from "../utils/api";

test("Fetches data and renders the bubbles", () => {
  const { getByText, debug } = render(<BubblePage />);
  debug();
});
