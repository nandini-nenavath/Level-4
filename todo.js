const todo_l1 = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const mark = (index) => {
    all[index].completed = true;
  };

  let today = new Date().toLocaleDateString("en-CA");

  const due = () => {
    return all.filter((todo) => {
      return todo.dueDate < today;
    });
  };

  const to_due1 = () => {
    return all.filter((todo) => {
      return todo.dueDate === today;
    });
  };

  const la_due1 = () => {
    return all.filter((todo) => {
      return todo.dueDate > today;
    });
  };

  const dis1 = (list) => {
    return list
      .map((todo) => {
        dis1_status = todo.completed ? "[x]" : "[ ]";
        dis1_date = todo.dueDate == today ? "" : todo.dueDate;

        return `${dis1_status} ${todo.title} ${dis1_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    mark,
    due,
    to_due1,
    la_due1,
    dis1,
  };
};

module.exports = todo_l1;

