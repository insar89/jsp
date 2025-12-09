import _ from "lodash";

const fruits = [
  "apple",
  "banana",
  "pear",
  "apricot",
  "apple",
  "banana",
  "apple",
  "orange",
  "pear",
];

const countFruits = (fruits) => {
  const result = {};
  for (let fruit of fruits) {
    if (result[fruit] === undefined) result[fruit] = 1;
    else result[fruit] += 1;
  }
  return result;
};

const countFruits2 = (fruits) => {
  const result = {};

  for (const name of fruits) {
    if (Object.hasOwn(result, name)) {
      result[name] += 1;
    } else {
      result[name] = 1;
    }
  }

  return result;
};

const countFruits3 = (fruits) => {
  const result = {};

  fruits.map((name) => (result[name] = (result[name] ?? 0) + 1));

  return result;
};

const text1 = "one two three two ONE one wow";
const text2 = "another one sentence with strange Words words";

const countWords = (text) => {
  const result = {};
  // if (text.length === 0) return result;
  //const words = text.toLowerCase().split(" ");
  //words.map((word) => (result[word] = (result[word] ?? 0) + 1));
  const words = _.words(text);
  for (const word of words) {
    result[word] = (result[word] ?? 0) + 1;
  }

  return result;
};

const countWords2 = (text) => {
  const result = {};
  const words = _.words(text.toLowerCase());
  words.map((word) => (result[word] = (result[word] ?? 0) + 1));

  return result;
};

console.log(countFruits3(fruits));
console.log(countWords2(""));
console.log("".toLowerCase().split(" ").length ?? "text");
