for(let i=0;i<5;i++){
  setTimeout(()=>{
    console.log(i);
  },2000);
}
// output - 0 1 2 3 4

for(var i=0;i<5;i++){
  setTimeout(()=>{
    console.log(i);
  },2000);
}
// output - 5 5 5 5 5
