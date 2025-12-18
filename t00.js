import _ from 'lodash';

const user = {
  name: 'Tirion',
  email: 'support@hexlet.io',
  age: 44,
}

const data = {
  name: 'Tirion 2',
  age: 33,
}

// user.name = data.name;
// user.age = data.age;
// if (Object.hasOwn(data, 'email')) {
//   user.email = data.email;
// }

Object.assign(user, data);
console.log(user);

const user2 = { company: { name: 'Hexlet' } };
Object.assign(user2, { company: {} });
console.log(user2.company.name);

const companyTask = {
  name: null,
  state: 'moderating',
};

const dataTask = {
  name: 'Hexlet',
  state: 'published',
};

//export default mergeAllowed = (parentObject, keys, childObject) => {
const mergeAllowed = (parentObject, keys, childObject) => {

  if (keys.length === 0) {
    return Object.assign(parentObject, childObject);
  }

  for (const key of keys) {
    parentObject[key] = childObject[key];
  }
  return parentObject;
};

const mergeAllowedLD = (parentObject, keys, childObject) => {
  if (keys.length === 0) {
    return Object.assign(parentObject, childObject);
  }

  return Object.assign(parentObject, _.pick(childObject, keys))
};

const mergeAllowedSensei = (parentObject, keys, childObject) => {
  const filteredData = keys.length > 0 ? _.pick(childObject, keys) : childObject;
  return Object.assign(parentObject, filteredData);
}

console.log(mergeAllowedSensei (companyTask, ['name'], dataTask));