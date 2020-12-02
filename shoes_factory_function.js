let shoesApiFacFun = function(pool) {

    let newShoe = async function(brand_name, color, size, unit_price) {

        if (verifyEntry(brand_name, color, size, unit_price).rowCount === 0) {
            let storeShoeQuery = await pool.query(
                `INSERT INTO stock
                (brand_name, color, size, unit_price)
                 VALUES ($1, $2, $3, $4)`, [brand_name, color, size, unit_price]);
            console.log(storeShoeQuery.rows);

        } else(console.log("shoeAlreadyStored"))

    }
    let verifyEntry = async function(brand_name, color, size, unit_price) {
        let verifyQuery = await pool.query(`SELECT * FROM stock WHERE brand_name = $1
        AND color = $2 AND size = $3 AND  unit_price = $4`, [brand_name, color, size, unit_price]);
        console.log(verifyQuery.rowCount)
        return verifyQuery.rowCount;

    }

    let renderApi = async function() {
        let APIquery = await pool.query(`SELECT * FROM brands`)
        return APIquery.rows
    }

    let renderApiBrands = async function() {
        let APIquery = await pool.query(`SELECT brand_name FROM brands`)
        console.log(APIquery.rows)
        return APIquery.rows
    }

    let renderApiColor = async function() {
        let APIquery = await pool.query(`SELECT color FROM brands`)
        console.log(APIquery.rows)
        return APIquery.rows
    }

    let renderApiSize = async function() {
        let APIquery = await pool.query(`SELECT size FROM brands`)
        console.log(APIquery.rows)
        return APIquery.rows
    }

    let renderApiId = async function() {
        let APIquery = await pool.query(`SELECT id FROM brands`)
        console.log(APIquery.rows)
        return APIquery.rows
    }
    let renderApiPrice = async function() {
        let APIquery = await pool.query(`SELECT unit_price FROM brands`)
        console.log(APIquery.rows)
        return APIquery.rows
    }


    return {
        newShoe,
        verifyEntry,
        renderApi,
        renderApiBrands,
        renderApiColor,
        renderApiPrice,
        renderApiId,
        renderApiSize
    }

}
module.exports = shoesApiFacFun;