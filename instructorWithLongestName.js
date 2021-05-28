/*Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.*/
instructors = [{ name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" }
];


var nameString = '';
var value = 0;
var instructor = '';
var namelength = 0;
const instructorWithLongestName = function(instructors) {
    for (var i = 0; i < instructors.length; i++) {
        nameString = instructors[i].name;
        namelength = nameString.length
        if (namelength > value) {
            value = namelength;
            instructor = instructors[i];
        }

    }
    return instructor;
};

console.log(instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" }
]));