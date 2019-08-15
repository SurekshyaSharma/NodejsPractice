// process.stdout.write("Hello ");
// process.stdout.write("World \n\n\n");

const questions = [
    "What is your name?",
    "What is  your school name?",
    "Which level are you at?"
];

const ask = (i=0) =>{
    process.stdout.write(`\n\n\n ${questions[i]}` );
    process.stdout.write( `\n > `);
};

ask();
    const answer =[];
process.stdin.on("data", data =>{
    answer.push(data.toString().trim());
    if (answer.length < questions.length){
        ask(answer.length);
    } else{
        process.exit();
    }
});

process.on('exit',() =>{
    const [name, school, level]= answer;
    console.log(`Thank you for your answers.
    Your name is ${name}.
    Your School name is ${school}.
    You level is ${level}.
`)
})

