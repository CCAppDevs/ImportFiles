export function sayHi() {
    alert("Hello World");
}

// JSON - JavaScript Object Notation

export const person = {
    name: "jesse",
    "full name": "Jesse Harlan",
    prof: "instructor",
    students: 24,
    favs: [
        "coffee",
        "toast",
        "board games"
    ],
    custom: {
        name: "obj",
        cost: 10,
        0: 0
    },
    testFunc: function() {
        return "hello and stuff";
    }
}

export const list = [
    { name: 'jesse', age: 41 },
    { name: 'sarah', age: 38 },
    { name: 'ashton', age: 7 },
    { name: 'rose', age: 10 },
]

export const listOfNames = ['bob', 'alice', 'jane', 2, { yeah: 'toast' }];

export const records = [
    { name: 'first name', grade: 'a' },
    { name: 'second name', grade: 'f', droppedClass: true },
]


// given the following list
export const nums = [ 1, 2, 3, 3, 3, 4 ];

// find out how many of each number is in the list

