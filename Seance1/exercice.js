
let students = [{name: 'john',id:  123,marks:98},
{name: 'john2',id:  444,marks:23},
{name: 'john3',id:  1243,marks:45},
{name: 'john4',id:  1233,marks:75},
]

let total = students.map((student) => {
    if(student.marks < 50){
        student.marks += 15
    }
    return student.marks
}
).filter((mark) => mark > 50).reduce((acc, mark) => acc + mark, 0)
console.log(total)

let words = ["hello", "goodbye", "the", "Antarctica", "a", "ANIMAL", "dog", "CAT", "zebra", "AAA"];