// UC => 11

class EmployeePayrollData{
    //defining properties
    //Id;         
    //if you didnt delcare Id property here and declare it in constructor it will work without getset method also
    //It will call getset for id implicitly
    salary;

    //Creating constructor
    constructor(Id,name,salary){
           this.Id=Id;
           this.salary=salary;
           this.name=name;
    }

    //getter setter method for name;
    get name() { return this._name; }
    set name(name) { this._name=name; }

    //creating to string method
    toString()
    {
        return "Employee ID :- "+this.Id +"\nEmployee Name :- "+this.name+"\nEmployee Salary :- "+this.salary;
    }
}

let employeePayrollData=new EmployeePayrollData(1,"Ganesh",412324);
console.log(employeePayrollData.toString());
employeePayrollData.name="Aditya";
console.log(employeePayrollData.toString());
//After commenting Id
employeePayrollData.Id=2;
//employeePayrollData.name="Akanksha";
console.log(employeePayrollData.toString());