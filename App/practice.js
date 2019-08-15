
//process.object contains information about the current process. this particular example is showing how to pass argumnet(using process.argv) to run the project
console.log('Hello I am using Nodejs');
console.log(__dirname);
console.log(__filename);

console.log(process.pid);
console.log(process.versions.node);
//to send the arugument ot the jsModule when we run it. process.argv is and array
//console.log(process.argv);
//node practice.js Surekshya Sharma - this command in terminal
// const[, ,firstName, lastName] = process.argv;
// console.log(`Your name is ${firstName} ${lastName}`);

const grab = flag =>{
    let indexAfterFlag = process.argv.indexOf(flag) +1;
    return process.argv[indexAfterFlag];
};
const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);
