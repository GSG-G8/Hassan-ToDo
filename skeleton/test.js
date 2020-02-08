var logic = require("./logic");
const todoFunctions = require("./logic");
describe("go to hell", () => {
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
});
