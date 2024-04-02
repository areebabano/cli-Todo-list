#!/usr/bin/env node
import inquirer from "inquirer";
import { todo } from "node:test";

let todos: string[] = [];
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
  
  
  todos.push(answers.TODO);
  loop = answers.AddMore;
  console.log(todos);

  }
  
  

  