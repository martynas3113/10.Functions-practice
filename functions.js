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
    console.log(`Only ${result} numbers of entered interval can divide by ${daliklis} without remainder.`);
}

division(55,100,4)

