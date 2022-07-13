let obj;
obj = {
    title: "string",
    status: true,
    id: 1
};
let getName = ({ firstname, lastname }) => {
    if (lastname)
        return firstname + "_" + lastname;
    return firstname;
};
console.log(getName({ firstname: "masai", lastname: "school" }));
console.log(getName({ firstname: "masai" }));
let objaddress;
objaddress = {
    houseNumber: 25,
    street: "abcd",
    city: "Nanded",
    state: "Maharashtra",
    postalCode: 215643,
    country: "India"
};
console.log(objaddress);
let obj3;
obj3 = {
    phones: [1258963224, 8974563215],
    addresses: ["nanded", "pune", "mumbai"],
    email: "abc@gmail.com",
    firstname: "Mamata",
    lastname: "Ingole",
    middlename: "Ghanshyam"
};
//
const phone = {
    firstname: "m",
    lastname: "I"
};
let arr = [];
const PhoneBook = (h) => {
    return arr.push(h);
};
PhoneBook(obj3);
PhoneBook(phone);
console.log(arr);
//# sourceMappingURL=index.js.map