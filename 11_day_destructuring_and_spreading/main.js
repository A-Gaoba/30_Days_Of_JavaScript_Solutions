// ## Exercises

// ### Exercises: Level 1

// ```js
const constants = [2.72, 3.14, 9.81, 37, 100];
// const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const countries = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
    currency: "Afghan afghani",
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://restcountries.eu/data/ala.svg",
    currency: "Euro",
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2886026,
    flag: "https://restcountries.eu/data/alb.svg",
    currency: "Albanian lek",
  },
  {
    name: "Algeria",
    capital: "Algiers",
    languages: ["Arabic"],
    population: 40400000,
    flag: "https://restcountries.eu/data/dza.svg",
    currency: "Algerian dinar",
  },
  {
    name: "American Samoa",
    capital: "Pago Pago",
    languages: ["English", "Samoan"],
    population: 57100,
    flag: "https://restcountries.eu/data/asm.svg",
    currency: "United State Dollar",
  },
];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];
// ```

// 1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor

const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// 3. Destructure the rectangle object by its properties or keys.
const { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(w, h, a, p);

// ### Exercises: Level 2

// 1. Iterate through the users array and get all the keys of the object using destructuring

// for (const { name, scores, skills, age } of users) {
//   console.log(name, scores, skills, age);
// }

// 2. Find the persons who have less than two skills
for (const { name, skills } of users) {
  if (skills.length > 2) {
    console.log(name);
  }
}
// ### Exercises: Level 3

// 1. Destructure the countries object print name, capital, population and languages of all countries
for (const { name, capital, population, languages } of countries) {
  console.log("Name", name);
  console.log("Capital", capital);
  console.log("population", population);
  console.log("languages", languages);
}
// 2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

//   ```js
const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
console.log(name, skills, jsScore, reactScore);
//   ```

//   ```sh
//   David (4) ["HTM", "CSS", "JS", "React"] 90 95
//   ```

// 3. Write a function called *convertArrayToObject* which can convert the array to a structure object.

//   ```js
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

console.log(convertArrayToObject(students))[
  ({
    name: "David",
    skills: ["HTM", "CSS", "JS", "React"],
    scores: [98, 85, 90, 95],
  },
  {
    name: "John",
    skills: ["HTM", "CSS", "JS", "React"],
    scores: [85, 80, 85, 80],
  })
];
//   ```

// 4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?

// - Add Bootstrap with level 8 to the front end skill sets
// - Add Express with level 9 to the back end skill sets
// - Add SQL with level 8 to the data base skill sets
// - Add SQL without level to the data science skill sets

// ```js
//     const student = {
//       name: 'David',
//       age: 25,
//       skills: {
//         frontEnd: [
//           { skill: 'HTML', level: 10 },
//           { skill: 'CSS', level: 8 },
//           { skill: 'JS', level: 8 },
//           { skill: 'React', level: 9 }
//         ],
//         backEnd: [
//           { skill: 'Node',level: 7 },
//           { skill: 'GraphQL', level: 8 },
//         ],
//         dataBase:[
//           { skill: 'MongoDB', level: 7.5 },
//         ],
//         dataScience:['Python', 'R', 'D3.js']
//       }
//     }
//   ```

//  The copied object output should look like this:

// ```js
//     {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }

// ```
