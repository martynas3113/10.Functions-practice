
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

//Function finds how many times numbers from given interval can be divided by given number without remainder

function division (interval1,interval2,divisionBy){

    const intervalas1 = interval1;
    const intervalas2 = interval2;
    const daliklis = divisionBy;
    let result = 0;

    for (let i = intervalas1; i < intervalas2; i++) {
        if (i%daliklis===0) {
            result = result+1;
            
        }
        
    }
    console.log(`Only ${result} numbers in interval from ${intervalas1} to ${intervalas2} can divide by ${daliklis} without remainder.`);
}

division(55,100,4)

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


