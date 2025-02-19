const f1 = () => {
    let employees = ['John', 'Sarah', 'Eric'];
    employees.push("Oscar")
    console.log(employees);

}
const f2 = () => {
    let employees = ['John', 'Sarah', 'Eric'];
    employees.pop()
    console.log(employees);
}
const f3 = () =>{
    let employees = ['John', 'Sarah', 'Eric'];
    employees.unshift();
    console.log(employees);
}
const f4 =() =>{
    let employees = ['John', 'Sarah', 'Eric'];
    employees.shift();
    console.log(employees);
}
const f5 = () => {
    let employees = ['John', 'Sarah', 'Eric'];
    console.log(employees.indexOf("Sarah"))
}
const f6 = () =>{
    let salaries = [35000, 45000, 55000, 70000, 90000];
    const newSalaries = salaries.filter(s=> s>50000)
    console.log(newSalaries);
}
const f7 = () =>{
    let salaries = [20000, 30000, 40000, 50000];
    const newSalries = salaries.map(s=> Math.pow(s, 2));
    console.log(newSalries)
}
const f8 =()=>{
    let salaries = [45000, 55000, 70000, 90000];
    const salary = salaries.find(s=> s>60000)
    console.log(salary)
}
const f9 = () =>{
    let sales = [100, 200, 150, 300, 400];
    console.log(sales.reduce((sum, n)=>sum + n, 0));

}
const f10 = () => {
    let departments = ['HR', 'Finance', 'Engineering', 'Marketing'];
    departments.forEach(d=> console.log(d));
}
const f11 =() =>{
    let inventory = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];
    console.log(inventory.slice(0,3));
}
const f12 =() =>{
    let inventory = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];
    inventory.splice(2, 2);
    console.log(inventory)
}

const f13 =() =>{
    let inventory = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];
    inventory.splice(3, 0, "new equipment");
    console.log(inventory)
}
const ticket3p4 = () =>{
    let officeEquipment1 = ['Printer', 'Scanner', 'Desk'];
    let officeEquipment2 = ['Chair', 'Lamp', 'Notebook'];
    console.log(officeEquipment1.concat(officeEquipment2))

}
// ticket3p4();

const ticket3p5 = () =>{
    let sales = [500, 1000, 750, 2000, 1250];
    console.log(sales.sort((a, b)=>b - a))

}
// ticket3p5()
const ticket4p1 = () =>{
    const emp =  {
        firstName: "John",
        lastName: 'Doe',
        position: 'Java Engineer',
        salary: 80000
    }
}
const ticket4p2 = () =>{
    let employee = {
        firstName: 'John',
        lastName: 'Doe',
        position: 'Software Engineer',
        salary: 80000
    };
    employee.position = "Java Developer"
    console.log(employee)
}
// ticket4p1()
const ticket4p3 = () =>{
    let employee = {
        firstName: 'John',
        lastName: 'Doe',
        position: 'Software Engineer',
        salary: 80000
    };
    employee.hireDate = "1/1/2025"
    console.log(employee)
}
const ticket4p4 = () =>{
    let employee = {
        firstName: 'John',
        lastName: 'Doe',
        position: 'Software Engineer',
        salary: 80000
    };
    delete employee.salary
    console.log(employee)
}
// ticket4p4()
const ticket4p5 = () =>{
    let employee = {
        firstName: 'John',
        lastName: 'Doe',
        position: 'Software Engineer',
        salary: 80000
    };
    for(let k in employee)
        console.log(k + ": " + employee[k])
}
// ticket4p5()
const ticket5p1 = () => {
    let projects = [
        { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
        { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
        { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
    ];
}

const ticket5p2 = () => {
    let projects = [
        { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
        { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
        { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
    ];
    let pArray = projects.map(p=>p.projectName)

    console.log(pArray)
}
// ticket5p2()

const ticket5p3 = () => {
    let projects = [
        { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
        { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
        { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
    ];
    let pArray = projects.filter(p=>p.status === 'in progress')

    console.log(pArray)
}
// ticket5p3()

const ticket5p4 = () => {
    let projects = [
        { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
        { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
        { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
    ];
    let pArray = projects.sort((a,b)=> new Date(a.deadline)- new Date(b.deadline))

    console.log(pArray)
}
ticket5p4()