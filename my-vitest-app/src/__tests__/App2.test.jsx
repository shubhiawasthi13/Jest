import {fireEvent, render, screen } from '@testing-library/react';
import App from '../App2';

// test("on change event testing", () => {
//     render(<App/>)
//     let input = screen.getByRole("textbox")
//     fireEvent.change(input,{target:{value:"a"}})
//     expect(input.value).toBe("atest")
// })

test("click event test case", () => {
    render(<App/>)
    let btn = screen.getByRole("button")
    fireEvent.click(btn)
    expect(screen.getByText("updated data")).toBeInTheDocument();
})