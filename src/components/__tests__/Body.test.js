import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_RES_LIST from "../mocks/mockResListData.json";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom"; //toBeInTheDocument
// No more react-dom/test-utils import!

//Modern Fetch Mocking, faking a fetch request
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_RES_LIST),
  })
);

it("should render body component with search for burger text input", async () => {
  // 1. RTL's render is already wrapped in act() internally
  render(
    <MemoryRouter>
      <Body />
    </MemoryRouter>
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard"); 
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("search-input");

  //giving a input from test case
  fireEvent.change(searchInput, { target: { value: "pizza" } }); // fire change event to input box
  // { target: { value: "burger" } } this will be passed to that e in handleChange function
  fireEvent.click(searchBtn);
  const resCardsAfterSearch = screen.getAllByTestId("resCard"); // findAllBy* is async and returns a promise

  expect(resCardsAfterSearch.length).toBe(3);

}); 