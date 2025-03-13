let company = {
    sales: [{name : "John" , salary: 1000},{name : "Alice" , salary: 600}],
    development: {
        web: [{name : "Peter" , salary: 2000},{name : "Alex" , salary: 1000}],
        internals: [{name : "Jack" , salary: 1300}],
    }
};
function totalSalary(department){
    if (Array.isArray(department)) {
        // Якщо це масив (список співробітників), тоді підсумовуємо їхні зарплати
        return department.reduce((sum, {salary}) => sum + salary, 0);
    }
        // Якщо це об'єкт (департамент, який містить інші підрозділи)
       const subDepartments = Object.values(department);
       return subDepartments.reduce((sum, subDep) => sum + totalSalary(subDep),0)
}
console.log(totalSalary(company));

