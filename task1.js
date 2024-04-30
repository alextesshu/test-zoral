const daysBetweenDates = require('./task1_1');
const orderedSales = require('./task1_2');
const projectObject = require('./task1_3');

// Example of usage of the function daysBetweenDates for the task 1.1 
console.log(" ============== Task 1.1: ==============");
const d1 = new Date('2024-04-25');
const d2 = new Date('2024-04-30');
const task_1_1_result = daysBetweenDates(d1, d2);
console.log(
    "days betwen date" +  d1.toDateString() + " and " + d2.toDateString() + " - " + task_1_1_result
);

// Example of usage of the function orderedSales for the task 1.2
console.log(" ============== Task 1.2: ==============");
const salesData = [
    { id: 1, amount: 10000, quantity: 10 },
    { id: 2, amount: 20000, quantity: 20 },
    { id: 3, amount: 30000, quantity: 30 }  
];
const task_1_2_result = orderedSales(salesData);
console.log(
    "initial data:\n" + JSON.stringify(salesData) + "\nsorted data:\n " + JSON.stringify(task_1_2_result)
);


// Example of usage of the function projectedObject for the task 1.3
console.log(" ============== Task 1.3: ==============");
const o1 = { p1: { p11: 11, p12: { p121: 121, p122: 122} }, p2: 2};
const o2 = { p1: { p12: null }};
const task_1_3_result = projectObject(o1, o2);

console.log(
    "object 1: \n" + JSON.stringify(o1) + "\nobject 2: \n" +  JSON.stringify(o2) +  "\nresult:\n" + JSON.stringify(task_1_3_result)
);
    