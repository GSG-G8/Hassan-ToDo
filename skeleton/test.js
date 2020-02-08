var logic = require("./logic");
const todoFunctions = require("./logic");
describe("go to hell", () => {
  test("should return a new array with the new todo", () => {
    let actual = todoFunctions.addTodo([], { id: 1, b: "1" });
    let expected = [{ id: 1, b: "1" }];
    expect(actual).toEqual(expected);
  });
  test("should return a new array with the new todo", () => {
    let actual = todoFunctions.addTodo([{ id: 1, b: "1" }], { id: 2, b: "2" });
    let expected = [
      { id: 1, b: "1" },
      { id: 2, b: "2" }
    ];
    expect(actual).toEqual(expected);
  });
});
