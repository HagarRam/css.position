function handleClick(){
    console.log(`element clicked`);
    document.getElementById("place-I-Love").style.color="red";
    document.getElementById("contactMe").style.color="red";
}
function delayHandleClick(){
    setTimeout(handleClick, 3000);
}
let element = document.body;
let abc = false;
function statusMode(){
    if(!abc){
        element.classList.add("dark");
        abc = true;
    }
    else {
        element.classList.remove("dark");
        abc = false;
        }
    }
function favoriteFood(){
const favoriteFood = ["burger", "sushi", "salad","chips"];
let makeList = `<ul>`;
for (let i = 0; i < favoriteFood.length; i++) {
  const element = favoriteFood[i];
  makeList += `<li>${element}</li>`;
}
makeList += `</ul>`;
document.getElementById("list1").outerHTML= makeList;
}
favoriteFood();





















    //regex!
    // function checkPasswordStrength(password) {
    //     if (password.length < 8) {
    //       return "weak password";
          
    //     }
      
    //     if (!password.match(/[a-z]/)) {
    //       return "weak password";
    //     }
      
    //     if (!password.match(/[A-Z]/)) {
    //       return "weak password";
    //     }
      
    //     if (!password.match(/[0-9]/)) {
    //       return "weak password";
    //     }
      
    //     if (password.match(/\s/)) {
    //       return "weak password";
    //     }
      
    //     return "strong password";
    //   }
    //   function alertMode(){
    //     alert(newPassword); 
    //         if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
    //             return false;
    //         }
    //         if(!regularExpression.test(newPassword)) {
    //             alert("password should contain atleast one number and one special character");
    //             return false;
    //         }
    //   }

    //ex.intheclass:
    //     let movies = ['Django', 'thusday', 'thursday', 'friday', 'saturday', 'Titanic'];
    // let movie = [];
    // movie[0]=movies[0];
    // movies.shift();
    // movies[0]='monday';
    // movie[1]=movies[movies.length -1]
    // movies.pop();
    // movies.push('sunday');
    // console.log(movies);
    // console.log(movie);