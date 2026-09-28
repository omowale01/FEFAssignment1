/*
Name: Omowale Obagunwa
Course: Front End Frameworks
Assignment: Assignment 1
Title: Employee Weekly Compensation Calculator

*/

export class Employee {
    protected ssn: string;
    protected lastName: string;
    protected firstName: string;
    protected address: string;
    protected rank: number;
    protected age: number;

    constructor(ssn: string, lastName: string, firstName: string,
        address: string, rank: number, age: number) {

        this.ssn = ssn;
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.rank = rank;
        this.age = age;
    }

    protected validateAge(): boolean {
        if (this.age >= 16) {
            return true;
        }
        else {
            console.log("Employee age must be greater than or equal to 16.");
            return false;
        }
    }

    protected validateRank(): boolean {
        if (this.rank >= 1 && this.rank <= 5) {
            return true;
        }
        else {
            console.log("Employee rank must be between 1 and 5.");
            return false;
        }
    }

    protected validateSSN(): boolean {
        let ssnPattern: RegExp = /^\d{3}-\d{3}-\d{3}$/;

        if (ssnPattern.test(this.ssn)) {
            return true;
        }
        else {
            console.log("Employee SSN must match ###-###-###.");
            return false;
        }
    }
}