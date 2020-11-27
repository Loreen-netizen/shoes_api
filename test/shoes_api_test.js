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
        // await pool.query(`delete from shifts`);
        // await pool.query(`delete from waiters`);


    })

    it("should be able to", async function() {
        //assemble
        const shoesApiFacFun = ShoesApiFacFun(pool);

        //act

        let shoesTest = await shoesApiFacFun.firstFunction();
        // storeInfo;

        //assert
        assert.equal(
            undefined, shoesTest);

    });

    after(async function() {
        await pool.end();
    })


});