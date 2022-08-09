// UC => 12

class EmployeePayrollData{
    //defining properties
    //Id;         
    //if you didnt delcare Id property here and declare it in constructor it will work without getset method also
    //It will call getset for id implicitly
    salary;
    gender;
    date;

    //Creating constructor
    constructor(...params){
           this.Id=params[0];
           this.name=params[1];
           this.gender=params[2];
           this.salary=params[3];
           this.date=params[4];
    }

    //getter setter method for name;
    get name() { return this._name; }
    set name(name) { this._name=name; }

    //creating to string method
    toString()
    {
        const dateformat={year:'numeric' ,month:'long',day:'numeric'};
        const empdate=this.date===undefined ? "undefined" : new Date().toLocaleDateString("en-US",dateformat);
        return "Employee ID :- "+this.Id +"\nEmployee Name :- "+this.name+"\nGender :- "+this.gender
        +"\nEmployee Salary :- "+this.salary+"\nDate of Joining :- "+empdate+"\n--------------------------";
    }
}

let employeePayrollData=new EmployeePayrollData(1,"Terisa","Female",345353,2022-05-40);
console.log(employeePayrollData.toString());
//let employeePayrollData=new EmployeePayrollData(1,"Ganesh","Male",412324,new Date());
//using new date will give date along with time in time zone too soo
let employeePayrollData1=new EmployeePayrollData(2,"Terisa","Female",345353,new Date()); //in TO string method for date customization
console.log(employeePayrollData1.toString());
employeePayrollData.name="Aditya";
console.log(employeePayrollData.toString());
//After commenting Id
employeePayrollData.Id=2;
employeePayrollData.name="Akanksha";
console.log(employeePayrollData.toString());