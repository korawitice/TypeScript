
interface employee {
    firstname?: string;
    lastname?: string;
    id?: number;
    age?: number;
    salary?: number;
    bonus?: boolean;
  }

  function createEmployee(config: employee): {firstname: string;lastname: string;id: number;age: number;salary: number;bonus:boolean} {
    let Newemployee = {firstname: "defult",lastname: "defult",id: 0,age: 0,salary: 0,bonus:false};
    if (config.firstname) {
        Newemployee.firstname = config.firstname;
    }
    if (config.lastname) {
        Newemployee.lastname = config.lastname;
    }
    if (config.id) {
        Newemployee.id = config.id;
    }
    if (config.age) {
        Newemployee.age = config.age;
    }
    if (config.bonus === true) {
        if (config.salary) {
            Newemployee.salary = config.salary *2.5 ;
            Newemployee.bonus=config.bonus;
        }
    }
    else{
        if(config.salary)
        Newemployee.salary = config.salary  ;   
    }
   return Newemployee; 
}
    
    
    
   
  
  let e = createEmployee({firstname: "korawit",lastname: "wilairat",id: 622110318,age: 21,salary: 150000,bonus:true});
  
  console.log(e);