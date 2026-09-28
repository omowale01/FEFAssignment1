/*
Name: Omowale Obagunwa
Course: Front End Frameworks
Assignment: Assignment 1
Title: Employee Weekly Compensation Calculator

*/

import { FullTimeEmployee } from "./fulltimeemployee.ts";
import { ContractEmployee } from "./contractemployee.ts";

console.log("EMPLOYEE WEEKLY COMPENSATION CALCULATOR");
console.log("---------------------------------------");

let fullTimeEmployee: FullTimeEmployee = new FullTimeEmployee(
  "123-456-789",
  "Smith",
  "John",
  "Saint John, NB",
  3,
  30,
  1200,
  100,
  8,
);

fullTimeEmployee.saveEmployee();

console.log("---------------------------------------");

let contractEmployee: ContractEmployee = new ContractEmployee(
  "987-654-321",
  "Brown",
  "Mary",
  "Saint John, NB",
  2,
  25,
  45,
  30,
);

contractEmployee.saveEmployee();

console.log("---------------------------------------");
console.log("TESTING INVALID EMPLOYEE");
console.log("---------------------------------------");

let invalidEmployee: FullTimeEmployee = new FullTimeEmployee(
  "12345",
  "Johnson",
  "David",
  "Saint John, NB",
  7,
  14,
  1000,
  50,
  5,
);

invalidEmployee.saveEmployee();
