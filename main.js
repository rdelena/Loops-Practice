// Do... while Loop examples to log 1-1000
// Steve's Example

// let numList = "";
// let i = 0;

// do {
//   i++;
//   numList = numList + i;
// } while (i < 1000);

// console.log(numList);

// Rodny's Example
// creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once. do (something) while (condition)

let i = 0;
const x = 1000;

do {
  console.log(i);
  i++;
} while (i <= x);

// Creating Object (Keys & Values)
// Objects use {} curly braces. Keys follow a colon :
// Values are next to keys & commas ,  are used to separate other keys/values.
let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
};

//method returns an array of a given object's own enumerable string-keyed property names
const keyLogs = (person) => {
  console.log(Object.keys(person));
};
keyLogs(person);

// method returns an array of a given object's own enumerable string-keyed property key-value pairs
const objEntries = (person) => {
  console.log(Object.entries(person));
};
objEntries(person);

//Array of Objects. Created using [] to create the array, and {} to create the objects inside the array. Keys & Values created along with the object.
let arrayOfPersons = [
  {
    firstName: "Becky",
    lastName: "Kline",
    birthDate: "Dec 20, 1988",
    gender: "female",
  },
  {
    firstName: "Eustace",
    lastName: "Bahg",
    birthDate: "Jan 17, 1969",
    gender: "male",
  },
  {
    firstName: "Mary",
    lastName: "Yvel",
    birthDate: "Aug 4, 2001",
    gender: "female",
  },
  {
    firstName: "Josh",
    lastName: "Dennis",
    birthDate: "Nov 6, 1996",
    gender: "male",
  },
];

//for.. of loop  executes a loop that operates on a sequence of values sourced from an iterable object
const oddYear = (arr) => {
  for (const key of arr) {
    let oddDate = parseInt(key.birthDate.slice(-1));
    if (oddDate % 2 !== 0) {
      console.log(key.birthDate);
    }
  }
};
oddYear(arrayOfPersons);

// .map() method creates a new array populated with the results of calling a provided function on every element in the calling array
const fullName = arrayOfPersons.map(
  (person) => `${person.firstName} ${person.lastName}`
);

console.log(fullName);

//.filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function
const onlyMale = arrayOfPersons.filter((person) => {
  return person.gender === "male";
});
console.log(onlyMale);

//function that returns true if the value of birthDate is before Jan 1, 1990
const beforeNinety = (date) => {
  let birthYear = parseInt(date.birthDate.slice(-4));
  if (birthYear < 1990) {
    // console.log(true)
    return true;
    // return birthYear < 1990
  }
};

// filter only people that were born before Jan 1, 1990
const beforeNinety1 = arrayOfPersons.filter(beforeNinety);
console.log(beforeNinety1);

// .find() from scratch
let nums = [1, 3, 6, 8, 9, 12, 15, 55, 100];
const myFind = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
};

const findNum = myFind(nums, (num) => {
  if (num > 10) {
    return true;
  }
});

console.log(findNum);

// .findIndex() from scratch
const myFindIndex = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return i;
    }
  }
  return -1;
};

const findNumIndex = myFindIndex(nums, (num) => {
  if (num > 20) {
    return true;
  }
});

console.log(findNumIndex);
