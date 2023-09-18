import "@testing-library/jest-dom/extend-expect";

import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import TodoList from ".";
import { RootState } from "../../app/store";

const mockStore = configureStore<RootState>();

describe("TodoList", () => {
  let store: ReturnType<typeof mockStore>;
  let input: HTMLInputElement;

  beforeEach(() => {
    store = mockStore({
      todos: { todos: [] },
    });

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    input = screen.getByPlaceholderText(
      "С чего начнем сегодня?"
    ) as HTMLInputElement;
  });

  it("should add a new todo", () => {
    act(() => {
      fireEvent.change(input, { target: { value: "New Todo" } });
      fireEvent.keyPress(input, { key: "Enter" });
    });

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  it("should complete a todo", () => {
    store = mockStore({
      todos: { todos: [{ id: 1, title: "Test Todo", completed: false }] },
    });

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const completeTodo = screen.getByTestId("todo-element");
    act(() => userEvent.click(completeTodo));

    expect(screen.getByText("Test Todo")).toHaveStyle(
      "text-decoration: line-through"
    );
  });

  it("should remove a todo", () => {
    store = mockStore({
      todos: { todos: [{ id: 1, title: "Test Todo", completed: false }] },
    });

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const removeImg = screen.getByTestId("remove-btn");
    userEvent.click(removeImg);

    expect(screen.queryByText("Test Todo")).not.toBeInTheDocument();
  });
});
