
//Function that reverses given word

function reverseWord (word){
  const input = word;
  let result = '';

  for (let i = input.length - 1; i >= 0; i--) {
      result = result + input[i];
      
  }
  console.log(result);
}

reverseWord('methamfetamine')



//Function removes first and last character in word
function FirstAndLast(str){
const string = str;
let removed = string.slice(1,-1);
console.log(removed);
}

//Function finds how many times numbers from given interval can be divided by given number without remainder

function division (interval1,interval2,divisionBy){

    const intervalas1 = interval1;
    const intervalas2 = interval2;
    const daliklis = divisionBy;
    let result = 0;
      
    for (let i = intervalas1; i <= intervalas2; i++) {
        if (i%daliklis===0) {
            result = result+1;
            
        }
        
    }
    console.log(`Only ${result} numbers in interval from ${intervalas1} to ${intervalas2} can divide by ${daliklis} without remainder.`);
}


division(0,1000,3)

//Function finds highest number from array

function highestNumber (arrayOfNumbers) {
    const numbers = arrayOfNumbers; /* Musu irasyta reiksme */
    let result = arrayOfNumbers[0] ; /* PRadedas skaiciuot nuo pacios pirmos saraso reiksmes ir ja laikom uz didziausia,nes rezultata pryliginsime 0 , galesim isgauti tik teigiamas reiksmes. Neigiami skaiciai bus ignoruojami,nes jie maziau nei 0 */
    
    for (let i = 0; i < numbers.length; i++) {
       
             if (result < numbers[i]) {
             result = numbers[i];
            }
            
        }
        console.log(`Highest number is: ${result}`)
    

}

highestNumber([1,23,34,56,78])

//Function sums ONLY positive integers from array

function positiveSum(arr) {
    const array = arr;
    let result = 0;
    let number = 0;
    
    for (i = 0; i<arr.length; i++){
      if (result < arr[i]){
        result = arr[i];
        number = number+arr[i];
      }
    }
    console.log(`Sum of positive numbers is: ${number}`);
  }

  positiveSum([-1,-2,-3,4,5]);


// Function finds only smallest number from array

  function smallestNumber (arrayOfNumbers) {
    const numbers = arrayOfNumbers; /* Musu irasyta reiksme */
    let result = arrayOfNumbers[0] ; /* PRadedas skaiciuot nuo pacios pirmos saraso reiksmes ir ja laikom uz didziausia,nes rezultata pryliginsime 0 , galesim isgauti tik teigiamas reiksmes. Neigiami skaiciai bus ignoruojami,nes jie maziau nei 0 */
    
    for (let i = 0; i < numbers.length; i++) {
       
             if (result > numbers[i]) {
             result = numbers[i];
            }
            
        }
        console.log(`Smallest number is: ${result}`)
  }
smallestNumber([23,45,-1,-45])


//Function find Highest and Smallest number from array

function SmallestAndHighestNumber(arrayOfNumbers) {
const numbers = arrayOfNumbers;
let result = arrayOfNumbers[0];
let resultSmall = arrayOfNumbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (result < numbers[i]){
    result = numbers[i];
  }
  if(resultSmall > numbers[i]){
    resultSmall = numbers[i]
  }
}
console.log (`Highest number is ${result} , smallest number is ${resultSmall}`)
}

SmallestAndHighestNumber([1,2,3,-34,5,-100,120])


//Function find Highest and Smallest number from array version 2.

function minMax(arr){
  const input = arr;
  let array =[];
  let size = input.length-1
  for (i = 0; i < input.length; i++) {
    for(j =0; j < input.length; j++) {
      if(input[j] > input[j+1]) {
        let temp = input[j+1];
        input[j + 1] = input[j];
        input[j] = temp;
      }
    }
  }
  array.push(input[0])
  array.push(input[size])
    return array;
}  

//Function that finds name from array that has exactly 4 letters and considers it as your friend.

function friendOrFoe(array){
const list = array;
let friend = [];

for (let i = 0; i < list.length; i++) {
    if (list[i].length ===4) {
      friend.push(list[i])
    } 
  
}
console.log(`You can be sure that ${friend} is your friend(s)!`)

}

friendOrFoe(['Michael','John','Otto'])

//Reverses positive number to negative but negative numbers and zero remains same.

function reversePosNum (num){
const number = num;
let lastNumber = 0;


if (number > 0) {
  lastNumber = number - (number*2)
} else {
  lastNumber = number;
}
console.log(lastNumber);
}

//Function that converts string of digits into a BIN number. All numbers below 5 will be 0 , and any numbers of 5 and above will be 1

function numToBin(Strnum) {
const str = Strnum;
let strArray = [];

for (let i = 0;  i< str.length; i++) {
strArray.push(str[i])
}
for (let i = 0;  i< strArray.length; i++) {
  if (strArray[i] < 5) {
    strArray[i] = 0;
  }
  if (strArray[i] >= 5) {
    strArray[i] = 1;
  }
  
}

strArray = strArray.join('');
console.log(strArray);
}

numToBin('7464748367525343')

//Function sorts string of numbers by descending order

function sortHighToLow(numStr) {
const num = numStr;
let array = [];
const str = num.toString();
// console.log(str);

for (let i = 0; i < str.length; i++) {
  array.push(str[i]);  
}

array = array.sort()
array.reverse()
array = array.join('')
console.log(array);
}

sortHighToLow('46294627346238472637845236')

//Function counts positive numbers in array and sums negative numbers

function posCountnegSum (array1) {
const array = array1;
let count = 0;
let sum = 0;
let result = [];

for (let i = 0;  i< array.length; i++) {
  if (array[i] > 0) {
    count++

  }
  if (array[i]< 0 )
  sum = sum + array[i]
}
result.push(count,sum)
console.log(`Pisitive numbers : ${count}, sum of negative numbers is : ${sum}`);
}

posCountnegSum ([1,2,3,-4,5])

//Function Checks to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XandO (string) {
const input = string;
let countx = 0;
let county = 0;
let array = [];
let result ='';
let input1 = input.toUpperCase()

if (input.length === 0) {
  result = true;
}
for (let i = 0;  i< input1.length; i++) {
array.push(input1[i]);
}
for (let i = 0;  i< array.length; i++) {
  if (array[i] === 'X') {
  countx++;
  }
  if (array[i]==='O') {
    county++;
  }
  if (countx === county) {
    result = true;  
  }
    else if (countx === 0 & county === 0) {
      result = true;
      
    }else {
      result = false;
    }
  
} console.log(result);

}

// Function Sums all the numbers of the array  except the highest and the lowest element (the value, not the index!).

function sumArray (SumArray) {
const array = SumArray;
let result = 0;
  for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] < array[j + 1]){
      temp = array[j];
      array[j] = array[j+1];
      array[j+1] = temp;
      
  }
}
}
  array.pop(array)
  array.shift(array)

  for (let i = 0; i < array.length; i++) {
    result = result + array[i]
  
}

console.log(`Sum of array without highest and smallest number is: ${result}`)
}

sumArray ([1,2,3,10,20])


// Function sums two lowest positive numbers from array.
function twoPositive (number) {

  let input = number;
  let result = 0;
  let first = 0;
  let second = 0;

  if(typeof input !=='object'){
    return 'Wrong input type!'
  }

  if(input.length === 0){
    return 'Input is empty';
  }



  for (let i = 0; i < input.length; i++) {
    if(typeof input[i]!=='number'){
      return 'Input must be only numbers';
    }

    if (input[i]<0){
      return 'Input must be only positive numbers';
    }
    for (let j = 0; j < input.length; j++) {
      if (input[j] > input[j+1]){
        let temp = input[j+1];
        input[j+1] = input[j]
        input[j] = temp;
        console.log(input);
      } 
    } 
  }
  
  first = input[0];
  input.shift();
  second = input[0];
  result = first + second;
  return `Sum of two lowest positive numbers is: ${result}`;

  
}
console.log(twoPositive ([4,23,6,345,63456,]));

//Function finds even number among odd numbers and return even number index
function EvenInOdd (numbers) {
const input = numbers;
let spacecount = 0;
let indexcount = 0;
let result = 0;

for (let i = 0; i < input.length; i++) {
  if(input[i]===' '){
    spacecount += 1;
  }
  if (input[i]%2===0){
    indexcount = i;
  }
  
}
result = indexcount-spacecount
return `Even number at index: ${result}`
}

console.log(EvenInOdd('3 5 7 9 3 1 4 3 5'))

// Function  takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  const input = l;
let array = [];

for(i = 0; i<=input.length; i++){
  if(typeof input[i]==='number'){
    array.push(input[i]);
  }
}
  return array;
}


//Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
//The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

function calculateYears(principal, interest, tax, desired) {
    
  let amount = principal;
  const interest1 = interest;
  const tax1 = tax;
  const desired1 = desired;
  let years = 0;
  
  while (amount < desired1) {
    let yearlyInterest = amount * interest1;
    let yearlyTax = yearlyInterest - (yearlyInterest*tax1);
    amount = amount + yearlyTax;
    years+=1
  }
    return years;
  }

  