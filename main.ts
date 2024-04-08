#! /usr/bin/env node
import inquirer from "inquirer";
import chalk  from "chalk";
let todoList = [];
let conditions =true;
console.log(chalk.blue.bold(" Wellcome -Todo list Application"));

while (conditions) {
  let addTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message:chalk.cyan( "Enter your New Task:"),
    },
  ]);

  todoList.push(addTask.task);
  console.log(chalk.blueBright`${addTask.task}Task added in todoList successfully`);

  let addMoreTask = await inquirer.prompt([
    {
      name: "addmore",
      type: "confirm",
      message: chalk.whiteBright( "Do you want a add more task ?"),
      default: "false"
    }
    ]);
    conditions= addMoreTask.addmore;
}
console.log(chalk.green("your updated Todo list:",todoList));
