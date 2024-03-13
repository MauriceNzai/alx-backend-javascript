interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let john: Student = {
    firstName: 'John',
    lastName: 'Gutt',
    age: 31,
    location: 'Nairobi'
}

let sue: Student = {
    firstName: 'Susan',
    lastName: 'Nat',
    age: 28,
    location: 'Kampala'
}

let studentList: Array = [john, sue];

let table: HTLTableElement = document.createElement('table');
document.body.appendChild(table);

let head: HTMLTableSectionElement = table.createTHead();
let row: HTMLTableRowElement = head.insertRow();
let tableHead1: HTMLTableHeaderCellElement = row.insertCell(0);
let tableHead2: HTMLTableHeaderCellElement = row.insertCell(1);

tableHead1.innerHTML = ("<b>First Name</b>");
tableHead2.innerHTML = ("<b>Location</b>");

let body: HTMLTableSectionElement = table.createTBody();
studentList.map(function(student){
    let newRow: HTMLTableRowElement = body.insertRow();
    let firstNameRow: HTMLTableCellElement = newRow.insertCell();
    let locationRow: HTMLTableCellElement = newRow.insertCell();
    firstNameRow.innerHTML = student.firstName;
    locationRow.innerHTML = student.location;
})
