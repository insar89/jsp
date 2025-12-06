const user = {
    name: 'VasyYa',
    married: true,
    age: 25,
    test: 'БесКонЧЕность и ДаЛЬше',

}

user.married = false;
user.surname = 'Petrov';

const test = {};


const normalize = (lesson) => {
    for (const el in lesson) {
        lesson[el] = lesson[el].toString().charAt(0).toUpperCase() + lesson[el].toString().slice(1).toLowerCase();
    }
}

normalize(user);


  console.log(user);
