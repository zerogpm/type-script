"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 2] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
;
let person = {
    name: "chris su",
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
//# sourceMappingURL=app.js.map