import React from "react";
import { render, screen, waitFor, wait } from "@testing-library/react";
import BubblePage from "./BubblePage";
import * as mockApi from "../utils/api";
import axios from "axios";

jest.mock("../utils/api");
jest.mock("axios", () => ({
  create: jest.fn(),
  get: jest.fn(),
}));

const testColors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
];

test("Fetches data and renders the bubbles", async () => {
  const res = jest.spyOn(mockApi, "api");
  res.mockImplementation(() => {
    return axios;
  });
  axios.get.mockResolvedValueOnce({ data: testColors });
  const { getByText, debug } = render(<BubblePage />);
  debug();
  const resolved = await wait(() => {});
  debug();
});
