//Twój kod
const numbers = [];
for(let i = 2; i < process.argv.length; i++){
    numbers.push(Number(process.argv[i]));
}

numbers.forEach(element => setTimeout(()=> console.log(element), element*1000));