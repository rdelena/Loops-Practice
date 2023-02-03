// let numList = ''
// let i = 0

// do {
//     i++
//     numList = numList + i;
// } while ( i < 1000);

// console.log(numList)

// let i = 0;
// const x = 1000;

// do{
//   console.log(i);
//   i++;
// } while (i <= x);

// let person = {
//     firstName: "Jane",
//     lastName: "Doe",
//     birthDate: "Jan 5, 1925",
//     gender: "female"
//   };



//   const keyLogs = (person) => {
//     console.log(Object.keys(person))
//   };
//   keyLogs(person);



//   const objEntries = (person) => {
//     console.log(Object.entries(person))
//   };
//   objEntries(person);

 

  let arrayOfPersons = [
    {
      firstName: "Becky",
      lastName: "Kline",
      birthDate: "Dec 20, 1988",
      gender: "female"
    },
    {
      firstName: "Eustace",
      lastName: "Bahg",
      birthDate: "Jan 17, 1969",
      gender: "male"
    },
    {
      firstName: "Mary",
      lastName: "Yvel",
      birthDate: "Aug 4, 2001",
      gender: "female"
    },
    {
      firstName: "Josh",
      lastName: "Dennis",
      birthDate: "Nov 6, 1996",
      gender: "male"
    }
  ];

  const oddYear = (arr) => {
    for (const key of arr) {
      let oddDate = parseInt(key.birthDate.slice(-1))
      if(oddDate % 2 !== 0) {
        console.log(key.birthDate);
      }

    }
  }

  oddYear(arrayOfPersons)


// const isBefore1990 = (birthDate) => new Date(birthDate) < new Date("Jan 1, 1990");

const beforeNinety = (date) => { 
  let birthYear = parseInt(date.birthDate.slice(-4))
  if(birthYear < 1990) {
    // console.log(true)
    return true
    // return birthYear < 1990
  }

}





const beforeNinety1 = arrayOfPersons.filter(beforeNinety)


console.log(beforeNinety1)

    
    
  




// const fullName = arrayOfPersons.map(person => `${person.firstName} ${person.lastName}`);

// console.log(fullName)

//   const onlyMale = arrayOfPersons.filter(person => {
//     return person.gender === "male";
//   });
//   console.log(onlyMale)
  
let nums = [1, 3, 6, 8, 9, 12, 15, 55, 100]
const myFind = (arr, func) => {
  for(let i = 0; i < arr.length; i++) {

    if(func(arr[i])) {
      return arr[i]

    }
  }  
  return undefined
}

const findNum = myFind(nums, (num) => {
  if(num > 10) {
    return true
  }
})

console.log(findNum)


const myFindIndex = (arr, func) => {
  for(let i = 0; i < arr.length; i++) {

    if(func(arr[i])) {
      return i

    }
  }  
  return -1
}

const findNumIndex = myFindIndex(nums, (num) => {
  if(num > 20) {
    return true
  }
})

console.log(findNumIndex)


