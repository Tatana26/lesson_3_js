// 1

let array = [5, 25, 89, 120, 36] 

array.push('javascript','python');
array.unshift('html','css');
array.shift();
array.pop();

console.log(array.length);
console.log(array);



// 2

let arraySecond = ['orange', 'banana', 'pear']

console.log(arraySecond.length);

arraySecond.push('apple', 'pineapple');
arraySecond.unshift('watermelon');

console.log(arraySecond.length);

arraySecond.splice(2, 0, 'mango');

console.log(arraySecond);

arraySecond.shift();
arraySecond.pop();


console.log(arraySecond.length);



// 3 / 1  map

let arrayThird = [12, 25, 3, 6, 8, 14, 7, 23];

let newArrayThird = arrayThird.map(function(x) {
    return x / 3
})

console.log(newArrayThird);

// 3 / 2 map

let newArrayArrowFunction = arrayThird.map( x => x / 3);
console.log(newArrayArrowFunction);



// 4 / 1 filter

let arrayFilter = ['hello', 125, 'javascript', 'html', 43, 'css', 'scss', 'bootstrap', 88, 59, 'python'];

let newArrayFilter = arrayFilter.filter(function(y){
    if (typeof y == 'number'){
        return y;
    }
    
})

console.log(newArrayFilter);



// 4 / 2 filter 

let newArrayFilterArrowFunction = arrayFilter.filter( y =>  typeof y == 'number' )

console.log(newArrayFilterArrowFunction);



// 5 

let languages = ['html', 'css', 'javascript', 'python', 'php'];

let newLanguages = languages.filter(function(x) {
    if (x.length > 3){
        return x 
    } 
})

console.log(newLanguages);

// 5 / 2 

let newLanguagesArrowFunction = languages.filter( x => x.length > 3);
console.log(newLanguagesArrowFunction);



// 6 


let arrayName =  ['Academy', 'of', 'digital', 'industries'].reduce(function(x,y){
    return x.concat(y + ' ');
}, ''

)

console.log(arrayName);



// 7 

let item = [12, 'google', 32, null, 'yahoo', 25]

let newItem = item.map(function(x){
    if ( typeof x == 'number'){
        return x * x;
    } else if ( typeof x == 'string') {
        return x.toUpperCase();
    }else {
        return x 
    }
    

})

console.log(newItem);


// 8 

let words = ['Madrid', 'Rome', 'Milan', 'Berlin']

let newWords = words.filter(function(x){
    if ( x.includes('m')) {
        return x
    } else if ( x.includes('M')) {
        return x 
    }
})

console.log(newWords);