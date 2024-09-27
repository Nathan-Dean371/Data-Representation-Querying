let q1 = (input) => 
{
    return input;
}

console.log(q1("Question 2"));


let sum = (a, b) => 
{
 return a + b;
}

console.log(sum(6, 4));


const ages = [25, 31, 42, 77];

let under70 = (age) =>
{
    if(age < 70)
        return age * 2;
    else
        return age;
}

console.log(ages.map((age) => under70(age)));