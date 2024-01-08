enum Role { ADMIN = 2, USER = 1 };

let person: {
    name: string,
    age: number,
    hobbies: string[],
    role: number
} = {
    name: "chris",
    age: 23,
    hobbies: ["swim"],
    role: 2
}

if(person.role === Role.USER) {
    console.log("this is just user")
} else {
    console.log("This is admin");
}