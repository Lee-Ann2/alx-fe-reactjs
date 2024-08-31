import TodoList from "../components/TodoList";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders TodoList component with existing todos", () => {
  render(<TodoList todo={todo} />);
  expect(screen.getByText("English")).toBeInTheDocument();
  expect(screen.getByText("Alx")).toBeInTheDocument();
});

test("Add todo", () => {
    render(<TodoList todo={todo} setTodo={setTodo} />);
    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("Alx")).toBeInTheDocument();
});

test("toggling todo", () => {
  const todo = screen.getByText("English") 

  render(<TodoList todo={todo} setTodo={setTodo} />);

  const toggle = screen.getByRole("checkbox");
  fireEvent.click(toggle);

  expect(setTodo).toBeCalledWith([
    expect.objectContaining({ completed: true }),
  ]);
});

test("deleting todo", () => {
  const todo = screen.getByText("English");

  render(<TodoList todo={todo} setTodo={setTodo} />);

  const deleteButton = screen.getByText("Delete");
  fireEvent.click(deleteButton);

  expect(setTodo).toBeCalledWith([]);
});