/*
Name: Omowale Obagunwa
Course: Front End Frameworks
Assignment: Assignment 1
Title: Employee Weekly Compensation Calculator

*/

import {Employee} from "./employee.ts";
import type {IEmployee} from "./iemployee.ts";

export class FullTimeEmployee extends Employee implements IEmployee {
    private salary: number;
    private bonus: number;
    private overtimeHours: number;

    constructor(ssn: string, lastName: string, firstName: string,
        address: string, rank: number, age: number,
        salary: number, bonus: number, overtimeHours: number) {

        super(ssn, lastName, firstName, address, rank, age);

        this.salary = salary;
        this.bonus = bonus;
        this.overtimeHours = overtimeHours;
    }

    private calculateSalary(): number {
        let hourlyRate: number = this.salary / 40;
        let overtimePay: number = 0;

        if (this.overtimeHours >= 1 && this.overtimeHours <= 10) {
            overtimePay =
                hourlyRate * this.overtimeHours * 1.25;
        }
        else if (this.overtimeHours >= 11 && this.overtimeHours <= 20) {
            overtimePay =
                hourlyRate * this.overtimeHours * 1.5;
        }
        else if (this.overtimeHours >= 21 && this.overtimeHours <= 30) {
            overtimePay =
                hourlyRate * this.overtimeHours * 1.75;
        }
        else if (this.overtimeHours > 30) {
            overtimePay =
                hourlyRate * this.overtimeHours * 2;
        }

        return overtimePay;
    }

    calculateCompensation(): number {
        let overtimePay: number = this.calculateSalary();

        let totalCompensation: number =
            this.salary + this.bonus + overtimePay;

        return totalCompensation;
    }

    displayInformation(): string {
        let information: string =
            "Full Time Employee\n" +
            "SSN: " + this.ssn + "\n" +
            "Last Name: " + this.lastName + "\n" +
            "First Name: " + this.firstName + "\n" +
            "Address: " + this.address + "\n" +
            "Rank: " + this.rank + "\n" +
            "Age: " + this.age + "\n" +
            "Salary: $" + this.salary.toFixed(2) + "\n" +
            "Bonus: $" + this.bonus.toFixed(2) + "\n" +
            "Overtime Hours: " + this.overtimeHours + "\n" +
            "Total Compensation: $" +
            this.calculateCompensation().toFixed(2);

        return information;
    }

    saveEmployee(): void {
        let validAge: boolean = this.validateAge();
        let validRank: boolean = this.validateRank();
        let validSSN: boolean = this.validateSSN();

        if (validAge && validRank && validSSN) {
            console.log(this.displayInformation());
        }
        else {
            console.log("Full Time Employee was not saved.");
        }
    }
}