import _ from 'lodash';

const user = {
  name: 'Vasya',
  married: true,
  age: 25,
}

user.friends = ['Kolya', 'Petya'];

user.company = {
  name: 'Hexlet',
}

console.log(user);

const obj = { a: { b: { c: { }, e: [1, 2] } } }
obj.a.b.c.key = 'value';
console.log(_.get(obj, 'obj', 'defaultValue'));
console.log(obj);
// console.log(obj);
// console.log(JSON.stringify(obj));

const company = { name: 'Hexlet' };
const user2 = { company };

console.log(user2);

console.log('\n');

const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
      test: {
        test2: 'test3',
      },
    },
  },
};

console.log(data);
console.log('\n')
const keys = ['hosts', '0', 'namen'];
const get = (data, keys) => {
  let check = data;

  for (const key of keys) {
    if (!Object.hasOwn(check, key)) {
      return null;
    }
    check = check[key];
  }

  return check;
}

console.log(data?.hosts?.[0]?.name);

console.log(get(data, keys));
