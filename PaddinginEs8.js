//String Padding

Ibrahim.padStart(10);

Ibrahim.padEnd(10);


// Object.value
// Object.entries
// Object.keys


let obj = {

	username0: 'Sofiyyah',
	username1: 'Abdurrahman',
	username2: 'Maryam'
}

Object.entries(obj).map(value => {

			return value[1] + value[0].replace("username", " ");
	}
)

Object.values(obj).forEach(value => {

			console.log(value);
	}
)


Object.entries(obj).forEach(value => {

			console.log(value);
	}
)

Object.keys(obj).forEach((key, index) => {

			console.log(key, obj[key]);
	}
)


