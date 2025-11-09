To understand this output we need to have a clear idea about 

(i) Function and block scope

(ii) Event loop and async coding

(i) 'var' type declaration is strictly function scope, meanwhile 'let' type declaration is strictly block scope,

Let's understand this by an example

  var user='ankit';

  function change(){

    var user='kundu';

  }

  console.log(user);

Here, ankit is printed as the variable is not overwritten and the declaration inside function is only valid and can be used if present inside the function.

It can be treated as 2 seperate variables.

  let user='ankit';

  if(true){

    let user='kundu';

  }

  console.log(user);

Here, ankit is printed as the variable is not overwritten and the declaration inside block is only valid and can be used if present inside the block.

It can be treated as 2 seperate variables. In memory it also creates two variables with same name.

block - lines seperated by {}, for loop, function, etc.

Similarly if the same code is used with 'var' tag, we can see,

  var user='ankit';

  if(true){

    var user='kundu';

  }

  console.log(user);

We can see user containing 'ankit' is overwritten and it displays 'kundu'. As it is not inside a function. 

(ii) async workflow

....

IIFE -> immediately invoke function

Suppose i want this block of code

  for(var i=0;i<5;i++){

    setTimeout(()=>{
  
      console.log(i);

    },2000);

  }

to give an output of - 0 1 2 3 4

So we can use an IIFE function block inside the for loop,'

  for(var i=0;i<5;i++){

    ((i)=>{

      setTimeout(()=>{
    
        console.log(i);
    
      },2000);
  
    })(i);

  }

Thus by wrapping in closures we can get our desired results.
