const products = [
    {
        id: 1,
        ean: "800234567",
        name: "Prodotto 1",
        price: 10.00,
        qty: 15,
        weight: 1.5,
        category: "Accessori",
        description: "breve descrizione del prodotto 1"
    },
    {
        id: 2,
        ean: "8007654322",
        name: "Prodotto 2",
        price: 20.00,
        qty: 10,
        weight: 3,
        category: "Altro",
        description: "breve descrizione del prodotto 2"
    },
    {
        id: 3,
        ean: "8002753345",
        name: "Prodotto 3",
        price: 24.90,
        qty: 0,
        weight: 7,
        category: "Accessori",
        description: "breve descrizione del prodotto 3"
    },
    {
        id: 4,
        ean: "800246543",
        name: "Prodotto 4",
        price: 40.00,
        qty: 0,
        weight: 4.5,
        category: "Gadget",
        description: "breve descrizione del prodotto 4"
    }
];

const employees = [
    {
        id: 1,
        firstname: "Marco",
        lastname: "Rossi",
        email: "marco.rossi@uiip.it",
        password: "testtest"
    },
    {
        id: 2,
        firstname: "Anna",
        lastname: "De Falco",
        email: "anna.defalco@uiip.it",
        password: "provaprova"
    },
    {
        id: 3,
        firstname: "Antonio",
        lastname: "Esposito",
        email: "antonio.esposito@uiip.it",
        password: "123password"
    },
];

module.exports.products = products;
module.exports.employees = employees;