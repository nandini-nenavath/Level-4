const todo_l1 = require("../todo");
let today = new Date().toLocaleDateString("en-CA");

const { all, mark, add, due, to_due1, la_due1 } = todo_l1();

describe("Testing the list which needs to be done ", () => {
  beforeAll(() => {
    add({
      title: "sleep for an hour",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Increment the todo list ", () => {
    let length = all.length;

    add({
      title: "finish the incomplete tasks",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Mark the todo as finished", () => {
    expect(all[0].completed).toBe(false);
    mark(0);
    expect(all[0].completed).toBe(true);
  });

  test("get back all todos which are due", () => {
    let todolist = due();

    expect(
      todolist.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("get back all todos which are due for today", () => {
    let todolist = to_due1();

    expect(
      todolist.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("get back all todos which due for later", () => {
    let todolist = la_due1();

    expect(
      todolist.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
