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
// let shoesRoutes = ShoesRoutes(shoesFacFun);
let bodyParser = require("body-parser")
let app = express();


app.use(session({
    secret: 'the expre$$ fl@sh string',
    resave: false,
    saveUninitialized: true
}));


// app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get("/api/shoes", async function(req, res) {
    const data = await shoesFacFun.renderApi();
    res.send(data)
});

// let server = async function() {
let PORT = process.env.PORT || 3000
    // await
app.listen(PORT, function() {
        console.log("App starting on port", PORT)
    })
    // }

// module.exports = server;