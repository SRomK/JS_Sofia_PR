console.log('hello world')


const box = ["sing","the", "song"];

const countLetters = (stri) => stri.length;

const sumNum = (a, b) => a + b; 

console.log(countLetters(box));

console.log(`This is my function ${sumNum(2,3)}`);


const date = new Date();

console.log(typeof date);



const loopy = () => {
    for(let i = 0; i < 5; i++){
        console.log('in loop', i)
    }
}

loopy();


const names = ['lolo', 'sofia', 'julio'];

for(let i = 0; i < names.length; i++){
    console.log(names[i])
}