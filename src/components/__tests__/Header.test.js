import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import {Provider} from "react-redux";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

it("should render Header component with a login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "login" }); // sepcifying role and name, if there were multiple buttons
    expect(loginButton).toBeInTheDocument();
});

it("should render Header component with 0 cart items", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - 0 items");
    expect(cartItems).toBeInTheDocument();
});

//should render Header component with cart irrespective of number of items in cart
it("should render Header component with cart", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);// regex to match cart text irrespective of number of items
    expect(cartItems).toBeInTheDocument();
});

it("should change login button to logout on click", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "login" }); // sepcifying role and name, if there were multiple buttons
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "logout" });
    expect(logoutButton).toBeInTheDocument();
});