import { render, screen } from "@testing-library/react";
import App from "./App";


// test("first react app test",()=>{
//   render(<App/>);
//   const text = screen.getByText("First React Test case");
//   expect(text).toBeInTheDocument();
// })

test("testing placehholder",()=>{
  render(<App />)
  let checkMyInput = screen.getByRole("textbox");
  let checkTextInput=screen.getByPlaceholderText("Enter user name");
  expect(checkMyInput).toBeInTheDocument();
  expect(checkTextInput).toBeInTheDocument();
 
})