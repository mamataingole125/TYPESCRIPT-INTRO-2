interface add {
    title: string;
    status: boolean;
    id: number;
}
declare let obj: add;
interface person {
    firstname: string;
    lastname?: string;
}
declare let getName: ({ firstname, lastname }: person) => string;
interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
declare let objaddress: Address;
interface PersonDetails {
    Prefix?: string;
    phones: number[];
    addresses: string[];
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
}
declare let obj3: PersonDetails;
declare const phone: person;
declare let arr: any[];
declare const PhoneBook: (h: PersonDetails | person) => string | number;
