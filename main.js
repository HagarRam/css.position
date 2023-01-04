function handleClick() {
	console.log(`element clicked`);
	document.getElementById('place-I-Love').style.color = 'red';
	document.getElementById('contactMe').style.color = 'red';
}
function delayHandleClick() {
	setTimeout(handleClick, 3000);
}
let element = document.body;
let abc = false;
function statusMode() {
	if (!abc) {
		element.classList.add('dark');
		abc = true;
	} else {
		element.classList.remove('dark');
		abc = false;
	}
}
function favoriteFood() {
	const favoriteFood = ['burger', 'sushi', 'salad', 'chips'];
	let makeList = `<ul>`;
	for (let i = 0; i < favoriteFood.length; i++) {
		const element = favoriteFood[i];
		makeList += `<li>${element}</li>`;
	}
	makeList += `</ul>`;
	document.getElementById('list1').outerHTML = makeList;
}
favoriteFood();

const myphoto1 = [
	{
		description: {
			title: 'SEA',
			info: 'My favorite place, I like to go there every day',
			favoriteBeachLocation: 'My favorite beach is Beit Yanai beach',
		},
		className: 'photo1',
		src: '/Assets/vaction.webp',
		id: 'photo1',
	},
	{
		description: {
			title: 'shows',
			info: 'I like to go to concerts often, I think it is a gift to our soul',
			favoriteBand: 'My favorite Band is Hadag Nahash',
		},
		className: 'photo2',
		src: '/Assets/show.jpg',
		id: 'photo2',
	},
	{
		description: {
			title: 'trips',
			info: 'I really like to travel in my country, usually every week I travel to all kinds of places.',
			favoritePlaceLocation: 'My favorite place in Israel is Mitzpe Ramon',
		},
		className: 'photo3',
		src: '/Assets/trips.jpg',
		id: 'photo3',
	},
];

myphoto1['descrption'] = function () {
	let container = document.createElement('div');
	container.id = 'allThePhotos';
	for (let i = 0; i < this.length; i++) {
		let img = document.createElement('img');
		img.src = myphoto1[i].src;
		img.className = myphoto1[i].className;
		img.alt = myphoto1[i].description.title;

		let p = document.createElement('p');
		p.textContent = myphoto1[i].description.info;
		// p.style.display = 'inline-block';
		// p.style.fontSize = '15px';
		// // p.style.marginInline = "100px";
		// // p.style.marginRight = "70%";
		p.id = myphoto1[i].id;
		container.appendChild(img);
		container.appendChild(p);
	}
	return container;
};
console.log(myphoto1.descrption());
document.getElementById('allThePhotos').appendChild(myphoto1.descrption());

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
