
    function skaitmenuKiekisSkaiciuje(skaicius){
    let number = skaicius;
    let result = 0;
    

    if (typeof number !== 'number') {
        return console.log('Pateikta netinkamo tipo reiksme')
    }

    if(isNaN(number)) {
        return console.log('Pateikta netinkamo tipo reiksme')
    }

    if (number < 0){
        return console.log('Skaicius negali buti neigiamas');
    }

    if (number % 1!==0){
        return console.log('Iveskite sveika skaiciu.');
    }



    result = number.toString().length;
    return result;

}

console.log(skaitmenuKiekisSkaiciuje(5.4));

function didziausiasSkaiciusSarase (array) {
   
    const numbers = array;
    result = -Infinity;

    if(typeof numbers !== 'object') {
        return console.error('Pateikta netinkamo tipo reikšmė')
    }

    if ( numbers.length === 0) {
        return console.log('Pateiktas sąrašas negali būti tuščias.')
    }


    for (let i = 0;   i< numbers.length; i++) {
        
        if(typeof numbers[i]!=='number') {
            return console.log('Pateikta netinkamo tipo reikšmė.')
        }
        
        else if (result < numbers[i]) {
            result = numbers[i];
        }   
        
    }

    //Post logic validation

    if(result === -Infinity){
        return console.log('Sarase nerastas nei vienas normalus skaicius')
    }
    return ` Didziausias skaicius sarase yra: ${result}` ;
} 

console.log(didziausiasSkaiciusSarase([-Infinity]))


function isrinktRaides (string,step) {
const str = string;
const number1 = step;
let result = '';

    if (typeof str !=='string') {
        return console.log('Pirmasis kintamasis ne teksto tipo.');
        
    }

    if(str ===''){
        return console.log('Tekstas negali buti tuscias.');
    }

    if (typeof number1 !=='number') {
        return console.log('Antrasis kintamasis ne skaiciaus tipo.');
        
    }

    if ( number1 === 0) {
        return console.log('Antrasis kintamasis turi buti daugiau uz 0.');
        
    }

    if ( number1 > str.length) {
        return console.log('Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.');
        
    }

    if(isNaN(number1)) {
        return console.log('Antrasis kintamasis netinkamo tipo.')
    }

    if (step%1!==0){
        return console.log('Zngsnis turi buti sveikasis skaicius');
    }

    if (step < 0){
        return console.log('Zingsnis turi buti teigiamas skaicius');
    }

    for (let i = number1 - 1;  i< str.length; i = i + number1) {
        result = result+str[i];
        
    }
    return result;
}

console.log(isrinktRaides('',-2));


function dalyba(a,b) {

    const first = a;
    const second = b;
    let result = 0;


    if (typeof first !=='number') {
        return console.log('Pirmas kintamasis netinkamo tipo! ')
    
    }

    if (typeof second !=='number') {
        return console.log('Antras kintamasis netinkamo tipo! ')
    }       
        
    if ( second === 0) {
        return console.log('Dalyba is 0 nera imanoma ')
    }

    if (isNaN(first)) {
        return console.log('Pirmas kintamasis netinkamo tipo! ')
    }

    if (isNaN(second)) {
        return console.log('Antras kintamasis netinkamo tipo! ')
    }

    if ( first === 0) {
        return console.log('0 nera dalinamas.')
    }

    

    result = a/b;
    return result;

}

console.log(dalyba(2,0));