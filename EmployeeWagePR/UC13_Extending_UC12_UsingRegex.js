// UC => 13 extending uc12 with use of regex 

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
    set name(name) {
        let name_regex=RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
        if(name_regex.test(name))
        {
            this._name=name; 
        } 
        else{
            throw 'Name of ID '+this.Id+' is Invalid!!';
        }
    }

    //creating to string method
    toString()
    {
        const dateformat={year:'numeric' ,month:'long',day:'numeric'};
        const empdate=this.date===undefined ? "undefined" : new Date(this.date).toLocaleDateString('en-US',dateformat);
        return "Employee ID :- "+this.Id +"\nEmployee Name :- "+this.name+"\nGender :- "+this.gender
        +"\nEmployee Salary :- "+this.salary+"\nDate of Joining :- "+empdate+"\n--------------------------";
    }
}

let employeePayrollData1=new EmployeePayrollData(2,"Terisa","Female",345353,"2022-06-01"); //in TO string method for date customization
console.log(employeePayrollData1.toString());

employeePayrollData1.name="Aditya";
console.log(employeePayrollData1.toString());

try{
    employeePayrollData1.Id=3;
    employeePayrollData1.name="Ak";
    console.log(employeePayrollData1.toString());
}
catch(e)
{
    console.error(e);
}