import _ from "lodash"

const course = {
  name: 'JS: React',
  slug: 'js-react',
}

for (const prop in course) {
  console.log(`course.${prop} = ${course[prop]}`);
}


console.log(Object.keys(course));
console.log(Object.values(course));
console.log(...Object.entries(course));

for (const [k, v] of Object.entries(course)) {
  console.log(k);
  console.log(v);
}

const lessonMembers = {
  syntax: 3,
  using: 2,
  foreach: 10,
  operations: 10,
  destructuring: 2,
  array: 2,
};

const findKeys = (obj, expectedValue) => {
  const result = [];
  const entries = Object.entries(obj);

  for (const [key, value] of entries) {
    if (value === expectedValue) {
      result.push(key);
    }
  }

  return result;
}

console.log(findKeys(lessonMembers, 10));

const pick = (obj, requiredKeys) => {
  const result = {};
  const entries = Object.entries(obj);

  for (const [key, value] of entries) {
    if (requiredKeys.find(el => el === key)) {
      result[key] = value;
    }
  }

  return result;
}

const pick2 = (data, keys) => {
  const result = {};

  for (const key of keys) {
    if (Object.hasOwn(data, key)) {
      result[key] = data[key];
    }
  }

  return result;
}

console.log(pick2(lessonMembers, ['syntax', 'using']));