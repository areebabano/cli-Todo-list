#!/usr/bin/env node
import inquirer from "inquirer";

let todos: string[] = [""];
let loop: boolean = true;

while (loop) {
  const answers: {
    TODO: string;
    AddMore: boolean;
  } = await inquirer.prompt([
    {
      type: "input",
      name: "TODO",
      message: "What do you want to add in your Todo?",
    },
    {
      type: "confirm",
      name: "AddMore",
      message: "Do you want to add more Todo?",
      default: false,
    },
  ]);
  const { TODO, AddMore } = answers;
  console.log(answers);
  loop = AddMore;
  if (TODO) {
    todos.push(TODO);
  } else {
    console.log("Kindly enter valid input");
  }
  console.log("Your Todo List:");

  if (todos.length > 0) {
    todos.forEach((todo) => {
      console.log(todo);
    });
  } else {
    console.log("Todos Not Found!");
  }
}
