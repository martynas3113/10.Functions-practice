function writeUsername (name) {

    console.log('Hello from ' + name);
}

writeUsername('Karen')


function reverseWord (word){
    const input = word;
    let result = '';

    for (let i = input.length - 1; i >= 0; i--) {
        result = result + input[i];
        
    }
    console.log(result);
}

reverseWord('methamfetamine')


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
    console.log(`Only ${result} numbers of interval from ${intervalas1} to ${intervalas2} can divide by ${daliklis} without remainder.`);
}

division(55,100,4)


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
    console.log(number);
  }

  positiveSum([-1,-2,-3,4,5]);




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




const numbers = [1,2,1,1,1,1,]
let result = numbers[0];

for (let i = 0;  i< numbers.length; i++) {
    if (result !== numbers[i]) {
        result = numbers[i];

        
    }
    
}
console.log(result);