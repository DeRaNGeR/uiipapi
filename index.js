const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { products, employees } = require("./demodata");

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({
        "success": true,
        "data": "prima pagina",
    });
});

app.get("/products", (req, res) => {
    res.json(products);
});

app.get("/products/outofstock", (req, res) => {
    const product = products.filter(product => product.qty <= 0);
    res.json(product);
});

app.get("/products/category/:category", (req, res) => {
    const product = products.filter(product => product.category.includes(req.params.category.trim()) );
    res.json(product);
});

app.get("/products/:id", (req, res) => {
    const product = products.find(product => product.id == req.params.id );
    res.json(product ? product : null);
});

app.get("/employees", (req, res) => {
    res.json(employees);
});

app.get("/employees/:id", (req, res) => {
    const employee = employees.find(employee => employee.id == req.params.id );
    res.json(employee ? employee : null);
});

app.listen(4000, () => {
    console.log("SERVER AVVIATO: http://localhost:4000/");
})