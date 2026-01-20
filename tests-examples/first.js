
const response = {
    status: "success",
    data: {
        'some users': [
            {
                name: 'Alex',
                age: 33,
            },
            {
                name: 'Vlad',
                age: 30,
            }
        ]
    }
}

// записати в нову змінну name імʼя першого юзера зі списку юзерів, та вивести її в консоль
const name2 = response.data["some users"][0].name;
console.log(name2);
// ==================================


// вивести те саме, якщо замість 'some users' стоїть довільний текст

let someUsers = Object.keys(response.data)[0];

//let myKeys = Object.keys(myData[1]);

//const name2 = response.data.myData.name;
//console.log("name " + name2);

//console.log( response);
console.log(myData);


