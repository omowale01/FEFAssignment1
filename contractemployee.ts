/*
Name: Omowale Obagunwa
Course: Front End Frameworks
Assignment: Assignment 1
Title: Employee Weekly Compensation Calculator

*/

import {Employee} from "./employee.ts";
import type {IEmployee} from "./iemployee.ts";

export class ContractEmployee extends Employee implements IEmployee {
    private hours: number;
    private hourlyRate: number;

    constructor(ssn: string, lastName: string, firstName: string,
        address: string, rank: number, age: number,
        hours: number, hourlyRate: number) {

        super(ssn, lastName, firstName, address, rank, age);

        this.hours = hours;
        this.hourlyRate = hourlyRate;
    }

    calculateCompensation(): number {
        let totalCompensation: number = 0;

        if (this.hours <= 40) {
            totalCompensation =
                this.hours * this.hourlyRate;
        }
        else {
            let regularPay: number =
                40 * this.hourlyRate;

            let overtimeHours: number =
                this.hours - 40;

            let overtimePay: number =
                overtimeHours * this.hourlyRate * 1.5;

            totalCompensation =
                regularPay + overtimePay;
        }

        return totalCompensation;
    }

    displayInformation(): string {
        let information: string =
            "Contract Employee\n" +
            "SSN: " + this.ssn + "\n" +
            "Last Name: " + this.lastName + "\n" +
            "First Name: " + this.firstName + "\n" +
            "Address: " + this.address + "\n" +
            "Rank: " + this.rank + "\n" +
            "Age: " + this.age + "\n" +
            "Hours: " + this.hours + "\n" +
            "Hourly Rate: $" + this.hourlyRate.toFixed(2) + "\n" +
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
            console.log("Contract Employee was not saved.");
        }
    }
}