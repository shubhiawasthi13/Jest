import {render, screen } from '@testing-library/react';
import App from '../App';

// beforeAll(() => {
//     console.log("********")
// })


// beforeEach(() => {
//     console.log("********")
// })
test('renders welcome message', () => {
  render(<App />);
// you can test input type, attribute, placeholder etc.....
  const title = screen.getByTitle("vite-img");
  expect(screen.getByText(/Hello/i)).toBeInTheDocument();
    expect(title).toBeInTheDocument();
});

// only, skip
describe.skip("ui test case grupe", () => {
  test("test case-1", () =>{
      render(<App />);
      let checkInput = screen.getByRole("textbox");
      expect(checkInput).toHaveAttribute("name","username")
  })
  test("test case-2", () =>{
      render(<App />);
      let checkInput = screen.getByRole("textbox");
      expect(checkInput).toHaveAttribute("name","username")
  })
  test("test case-3", () =>{
      render(<App />);
      let checkInput = screen.getByRole("textbox");
      expect(checkInput).toHaveAttribute("name","username")
  })
})

describe("api test case group", () => {
  test("api test case-1", () =>{
    console.log("1")
      render(<App />);
      let checkInput = screen.getByRole("textbox");
      expect(checkInput).toHaveAttribute("name","username")
  })
  test("api test case-2", () =>{
     console.log("2")
      render(<App />);
      let checkInput = screen.getByRole("textbox");
      expect(checkInput).toHaveAttribute("name","username")
  })
  test("api test case-3", () =>{
     console.log("3")
      render(<App />);
      let checkInput = screen.getByRole("textbox");
      expect(checkInput).toHaveAttribute("name","username")
  }) 
  // nested  describe
  describe("inner api test case group", () => {
  test("inner api test case-1", () =>{
      render(<App />);
      let checkInput = screen.getByRole("textbox");
      expect(checkInput).toHaveAttribute("name","username")
  })
 
})
})

// afterAll(() => {
//     console.log("********")
// })
afterEach(() => {
    console.log("********")
})