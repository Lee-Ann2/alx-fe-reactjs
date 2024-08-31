import AddTodoForm from "../components/AddTodoForm";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';

test("renders AddTodoForm component", () => {
  render(<AddTodoForm />);
});

test("add a new todo", () => {
  const todo = [];

  render(<AddTodoForm todo={todo} setTodo={setTodo} />);

  const input = screen.getByPlaceholderText("To-do");
  fireEvent.change(input, { target: { value: "Another To-do" } });

  const addButton = screen.getByText("To-do");
  fireEvent.click(addButton);

  expect(setTodo).toBeCalledWith([
    expect.objectContaining({ title: "Another To-do" }),
  ]);
});