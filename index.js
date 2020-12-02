let express = require("express");
let session = require("express-session");
let cors = require('cors')

let pg = require("pg");
let Pool = pg.Pool;
let connectionString = process.env.DATABASE_URL || 'postgresql://loreen:pg123@localhost:5432/shoes_api';
let pool = new Pool({
    connectionString
});
let ShoesFacFun = require("./shoes_factory_function.js");
// let ShoesRoutes = require("./routes.js");
let shoesFacFun = ShoesFacFun(pool);
let ShoeCatalog = require("./API/shoeCatalog-api");
let shoesAPI = ShoeCatalog(shoesFacFun);
let bodyParser = require("body-parser")
let app = express();


app.use(session({
    secret: 'the expre$$ fl@sh string',
    resave: false,
    saveUninitialized: true
}));


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get("/api/shoes", shoesAPI.renderApi);

app.get("/api/shoes/brand_name", shoesAPI.renderApiBrands);

app.get("/api/shoes/color", shoesAPI.renderApiColor);

app.get("/api/shoes/size", shoesAPI.renderApiSize);

app.get("/api/shoes/price", shoesAPI.renderApiPrice);

app.get("/api/shoes/id", shoesAPI.renderApiId);



// let server = async function() {
let PORT = process.env.PORT || 3033
    // await
app.listen(PORT, function() {
        console.log("App starting on port", PORT)
    })
    // }

// module.exports = server;