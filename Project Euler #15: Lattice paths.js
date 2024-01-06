function  factorial ( n ) { 
    if  (n <  0 ) {  return  undefined ; } 
    let  result =  BigInt ( 1 ); 
    for  ( let  i =  BigInt ( 2 ); i <= n; i++) { 
        result *= i; 
    } 
    return  result; 
} 

function  latticePaths ( n, k ) { 
    n = n + k 
    var  result =  0 
    result =  factorial ( BigInt (n)) / ( factorial ( BigInt (k)) *  factorial ( BigInt (n - k))) 
    return  result. toString () 
} 

function  processData ( input ) { 
    var  lines = input. trim (). split ( '\n' ); 
    lines. shift () 

    for  ( var  i =  0 ; i < lines. length ; i++) { 
        const  [n, k] = lines[i]. split ( ' ' ). map ( Number ); 
        const  result =  BigInt ( latticePaths (n, k)) %  BigInt ( 1000000007 ) 
console . log (result. toString ())  
    } 
}  

process. stdin . resume (); 
process. stdin . setEncoding ( "ascii" ); 
_input =  "" ; 
process. stdin . on ( "data" ,  function  ( input ) { 
    _input += input; 
}); 

process. stdin . on ( "end" ,  function  ( ) { 
   processData (_input); 
}) 
