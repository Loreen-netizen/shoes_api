var ShoesApiFacFun = require("../shoes_factory_function.js");
let assert = require("assert");
let pg = require("pg");
let Pool = pg.Pool;
let connectionString = process.env.DATABASE_URL || 'postgresql://loreen:pg123@localhost:5432/test_shoes_api';
let pool = new Pool({
    connectionString
});

describe("shoesApiFacFun", async function() {
    beforeEach(async function() {
        await pool.query(`delete from cart`);
        await pool.query(`delete from stock`);


    })

    it("should be able to add new brand to the database", async function() {
        //assemble
        const shoesApiFacFun = ShoesApiFacFun(pool);
        //act
        let storeShoe = await shoesApiFacFun.newShoe('nike', 'blue', 3, 33);
        let check = await shoesApiFacFun.verifyEntry('nike', 'blue', 3, 33);
        // storeInfo;

        //assert
        assert.equal(1, check)


    });


    it("should be able to update brand colour in the database", async function() {
        //assemble
        const shoesApiFacFun = ShoesApiFacFun(pool);

        //act

        let shoesTest = await shoesApiFacFun.firstFunction();
        // storeInfo;

        //assert
        assert.equal(
            "", shoesTest);

    });
    it("should be able to update shoe size in the database", async function() {
        //assemble
        const shoesApiFacFun = ShoesApiFacFun(pool);

        //act

        let shoesTest = await shoesApiFacFun.firstFunction();
        // storeInfo;

        //assert
        assert.equal(
            "", shoesTest);

    });
    it("should be able to list all shoes in stock", async function() {
        //assemble
        const shoesApiFacFun = ShoesApiFacFun(pool);

        //act

        let shoesTest = await shoesApiFacFun.firstFunction();
        // storeInfo;

        //assert
        assert.equal(
            "", shoesTest);

    });

    it("should be able to list all shoes for a given brand", async function() {
        //assemble
        const shoesApiFacFun = ShoesApiFacFun(pool);

        //act

        let shoesTest = await shoesApiFacFun.firstFunction();
        // storeInfo;

        //assert
        assert.equal(
            "", shoesTest);

    });


    it("should be able to list all shoes for a given size", async function() {
        //assemble
        const shoesApiFacFun = ShoesApiFacFun(pool);

        //act

        let shoesTest = await shoesApiFacFun.firstFunction();
        // storeInfo;

        //assert
        assert.equal(
            "", shoesTest);

    });

    it("List all shoes for a given brand and size", async function() {
        //assemble
        const shoesApiFacFun = ShoesApiFacFun(pool);

        //act

        let shoesTest = await shoesApiFacFun.firstFunction();
        // storeInfo;

        //assert
        assert.equal(
            "", shoesTest);

    });



    it(`should be able to update shoe stock (As shoes are added to the shopping 
    basket the stock count should go down. If the basket is cancelled 
    the shoes should go back in stock`, async function() {
        //assemble
        const shoesApiFacFun = ShoesApiFacFun(pool);

        //act

        let shoesTest = await shoesApiFacFun.firstFunction();
        // storeInfo;

        //assert
        assert.equal(
            "", shoesTest);

    });


    after(async function() {
        await pool.end();
    })


});