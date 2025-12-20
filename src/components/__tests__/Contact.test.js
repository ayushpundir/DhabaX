import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";



describe("Contact Component test cases", () => {
    test("should load contact component heading", () => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");    
    expect(heading).toBeInTheDocument();
});

// first we need to intall @babel/preset-react so that jest can understand react components
// and then we need to configure babel to use that preset by updating a babel.config.js file in the root directory of the project
// now to use toBeInTheDocument matcher we need to install jest-dom library
// npm install --save-dev @testing-library/jest-dom
// and then we need to import that library in our test files

test("should load contact component button", () => {
    render(<Contact/>);

    const button = screen.getByText("Submit");    
    expect(button).toBeInTheDocument();
});

test("should load contact component input name", () => {
    render(<Contact/>);

    const inputText = screen.getByPlaceholderText("Name");    
    expect(inputText).toBeInTheDocument();
});
it("should load contact component both input boxes", () => {
    render(<Contact/>);

    //this is knows as querrying
    const inputBoxes = screen.getAllByRole("textbox");    
    /** These inputBoxes will be in an array which contains both the input elements 
     * these are actually React Element objects; (we have written jsx and under the hood its converted to React.createElement calls)
     * we can check the length of this array to ensure that both input boxes are present
    */
    expect(inputBoxes.length).toBe(2);
})
});
//instead of writing test we can also use it function they both are same