var logic = require("./logic");
const todoFunctions = require("./logic");
describe("ToDo test function", () => {
  test(" addTodo function should return a new array with the new todo", () => {
    let actual = logic.addTodo([], { id: 1, b: "1" });
    let expected = [{ id: 1, b: "1" }];
    expect(actual).toEqual(expected);
  });

  test("addTodo function should return a new array with the new todo", () => {
    let actual = logic.addTodo([{ id: 1, b: "1" }], { id: 2, b: "2" });
    let expected = [
      { id: 1, b: "1" },
      { id: 2, b: "2" }
    ];
    expect(actual).toEqual(expected);
  });

  test("deleteTodo function should return a new array without the target todo", function() {
    let todos = [
      { id: 1, b: "1" },
      { id: 2, b: "2" }
    ];
    let actual = logic.deleteTodo(todos, 2);
    let expected = [{ id: 1, b: "1" }];
    expect(actual).toEqual(expected);
  });

  test("deleteTodo function should return a new array without the target todo", function() {
    let todos = [{ id: 1, b: "1" }];
    let actual = logic.deleteTodo(todos, 1);
    let expected = [];
    expect(actual).toEqual(expected);
  });

  test("markTodo function should toggle between done and not done", function() {
    let todos = [{ id: 1, description: "test", done: false }];
    let actual = logic.markTodo(todos, 1);
    let expected = [{ id: 1, description: "test", done: true }];
    expect(actual).toEqual(expected);
  });

  test("markTodo function should toggle between done and not done", function() {
    let todos = [{ id: 2, description: "test", done: true }];
    let actual = todoFunctions.markTodo(todos, 2);
    let expected = [{ id: 2, description: "test", done: false }];
    expect(actual).toEqual(expected);
  });
});
