// // Functions : Functions are use to reuse the code.

// //keyword  function name 
// function helloWorld(){
//     console.log("Hello World!");
//     console.log("Hello World!");
// }
// helloWorld(); //calling

// //Addition of two numbers with the help of functions
// //          recieving parameters  
// function sum(num1,num2){
//     console.log(num1+num2);
// }
// sum(20,30); //sending arguments
// sum(50,50);

// //Greeting User through Function
// function greetUser(username)
// {
//     console.log("Hello "+username+"!");
// }
// greetUser("Oscar");

// //Making a Function in which we will take user's age and its name. If he is 18 or more than 18 years old he can get admission in gym, if he is less then 18 he will not get admission in gym.
// function admissionGym(username,age){
//     if(age<18){
//         console.log("You cannot get admission in Gym.");
//     }
// else{
//     console.log(username+", you can get admission in Gym!");

// }
// }
// admissionGym("Shaheer",18);
// admissionGym("Ali",15);
// admissionGym("Abdullah",22);

// Sequence of parameters should match sequence of arguments.
//No condition in else.

//Return Concept in Function
//Return always return a value, their should be only one return in a function and return function returns a value when function is called.
//In JavaScript undefined,error and null are all different concepts.

// function sum(num1,num2){
// console.log(num1+num2);
// }

// var answer=sum(10,10);
// console.log(answer); //See it is proved that nothing is returned until we use return keyword in our function.
//20, will be printed as sum function is called
//undefined, it is because we assigned calling to a variable and when we printed it it gives "undefined" as function without return doesnt reuturns a value!


//Use of return allows you to not use console.log();
// //Here's a example of return
// function sum(num1,num2){
//     return num1+num2;
// }
// var ans=sum(10,10);
// console.log(ans);
// //See now , by using return now if we assign aur calling to any variable it will not give undefined and will give a output, as already said before by using return in our function it returns that value to its calling! And in order to print it you have to assign it to a variable and then print it.

// function greet(username){
//     return "Hello "+username;
// }
// alert(greet("Shaheer"));

// //If we want it to print it in the console!
// var printIt=greet("Shaheer");
// console.log(printIt);


//Calculating Percentage
function calculatePercentage(sub1,sub2,sub3,sub4,username){
    var totalMarks=400;
    var obtainMarks=+(sub1+sub2+sub3+sub4);
    var percentage=(obtainMarks/totalMarks)*100;
  
    return  username+" got "+percentage+"% ";
}
var result=calculatePercentage(45,54,90,78,"Abdullah");
console.log(result)