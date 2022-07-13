interface add {
    title:string,
    status:boolean,
    id:number
}

let obj:add

obj={
    title:"string",
    status:true,
    id:1
}

//

interface person {
    firstname:string,
    lastname?:string
}

let getName=({firstname,lastname}:person) : string =>{

    if(lastname) return firstname+"_"+lastname
    return firstname
}

console.log(getName({firstname:"masai",lastname:"school"}))
console.log(getName({firstname:"masai"}))

//

interface Address {
    houseNumber:number,
    street:string
    city:string
    state:string
    postalCode:number
    country:string
}

let objaddress:Address

objaddress={
    houseNumber:25,
    street:"abcd",
    city:"Nanded",
    state:"Maharashtra",
    postalCode:215643,
    country:"India"
}

console.log(objaddress)


//

interface PersonDetails {
    Prefix?:string,
    phones:number[],
    addresses:string[]
    email?:string
    firstname:string
    lastname:string
    middlename?:string
}

let obj3:PersonDetails

obj3={

    phones:[1258963224,8974563215],
    addresses:["nanded","pune","mumbai"],
    email:"abc@gmail.com",
    firstname:"Mamata",
    lastname:"Ingole",
    middlename:"Ghanshyam"
}


//

const phone:person= {
    firstname:"m",
    lastname:"I"
}

let arr=[]
const PhoneBook=(h:PersonDetails | person):string | number=>{
 return arr.push(h)
}


PhoneBook(obj3)
PhoneBook(phone)

console.log(arr)
