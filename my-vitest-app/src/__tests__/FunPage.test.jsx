import {fireEvent, render, screen } from '@testing-library/react';
import FunPage from '../FunPage';
import handleAnothertData from '../helper';


test("function testing case 1", () => {
    render(<FunPage/>);
    const btn = screen.getByTestId("btn1");
    fireEvent.click(btn);
    expect(screen.getByText("hello")).toBeInTheDocument();
})
test("function testing case 2", () => {
    expect(handleAnothertData()).toMatch("hii")
})