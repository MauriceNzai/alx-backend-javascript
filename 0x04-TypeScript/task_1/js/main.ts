  interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// task 2: the Diretors interface

interface Directors extends Teacher {
    numberOfReports: number;
}

// task 3: printing Teachers

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// returns first letter of the firstName and lastName in full
let printTeacher: printTeacherFunction = (
    firstName: string,
    lastName: string
): string => {
    return `${firstName[0]}. ${lastName}`;
};

// task4: writing a class
export let StudentClass: StudentConstrutor = class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomeWork() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }

}

export interface StudentClassInterface {
    readonly firstName: string;
    readonly lastName: string;
    workOnHomeWork(): string;
    displayName(): string;
}

export interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}
