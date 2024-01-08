var Role;
(function (Role) {
    Role[Role["ADMIN"] = 2] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
;
var person = {
    name: "chris",
    age: 23,
    hobbies: ["swim"],
    role: 2
};
if (person.role === Role.USER) {
    console.log("this is just user");
}
else {
    console.log("This is admin");
}
