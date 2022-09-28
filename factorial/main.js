console.log("hello world");

// let num1=0,num2=1,next;

//     for(i=0;i<=10;i++){
//        console.log(num1);
//        next=num1+num2;
//        num1=num2;
//        num2=next;
//     }
// const num=1;
// for(var i=0;i<100;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FIZZ BUZZ");
//     }
//     else if(i%3==0){
//         console.log("FIZZ");
//     }
//     else if(i%5==0){
//         console.log("BUZZ");
//     }
//     else{
//         console.log(i);
//     }
//     }
function fact(){
    var i,num,f;
    f=1;
    num=document.getElementById("cal").value;
    for(i=1;i<=num;i++){
        f*=i
    }
    document.getElementById("btn").innerHTML="the factorial of the number is" +i+ "is "+f;
}