// UC => 14 extending uc13 with use of regex and creating gettersetter method for all properties to all validation 

class EmployeePayrollData{

    //Creating constructor
    constructor(...params){
           this.Id=params[0];
           this.name=params[1];
           this.gender=params[2];
           this.salary=params[3];
           this.date=params[4];
    }

      //getter setter method for Id;
      //getter setter method for name;
    get Id() { return this._Id; }
    set Id(Id) {
        let Id_regex=RegExp('^[1-9]$');
        if(Id_regex.test(Id))
        {
            this._Id=Id; 
        } 
        else{
            throw 'Employee ID is Invalid!!';
        }
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

      //getter setter method for Gender;
      get gender() { return this._gender; }
      set gender(gender) {
          let gender_regex=RegExp('^[A-Z]$');
          if(gender_regex.test(gender))
          {
              this._gender=gender; 
          } 
          else{
              throw 'Gender of ID '+this.Id+' is Invalid!!';
          }
      }

        //getter setter method for name;
    get salary() { return this._salary; }
    set salary(salary) {
        let salary_regex=RegExp('^[1-9][0-9]*(\.[0-9])?');
        if(salary_regex.test(salary))
        {
            this._salary=salary; 
        } 
        else{
            throw 'Salary of ID '+this.Id+' is Invalid!!';
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

let employeePayrollData1=new EmployeePayrollData(1,"Terisa","M",345353,"2022-08-12"); //in TO string method for date customization
console.log(employeePayrollData1.toString());

//for invalid ID
try{
    employeePayrollData1.Id=0;
    console.log(employeePayrollData1.toString());
}
catch(e)
{
    console.error(e);
}

//for invalid name
// try{
//     employeePayrollData1.Id=3;
//     employeePayrollData1.name="Ab";
//     console.log(employeePayrollData1.toString());
// }
// catch(e)
// {
//     console.error(e);
// }


// //for invalid Gender
// try{
//     employeePayrollData1.Id=3;
//     employeePayrollData1.name="Abhishek";
//     employeePayrollData1.gender="male"  //or"m" also throw exception
//     console.log(employeePayrollData1.toString());
// }
// catch(e)
// {
//     console.error(e);
// }

// //for Invalid Salary
// try{
//     employeePayrollData1.Id=3;
//     employeePayrollData1.name="Abhishek";
//     employeePayrollData1.gender="M"
//     employeePayrollData1.salary=0.00;
//     console.log(employeePayrollData1.toString());
// }
// catch(e)
// {
//     console.error(e);
// }