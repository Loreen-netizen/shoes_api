module.exports = function(shoesFacFun) {

    let renderApi = async function(req, res) {
        try {
            let allData = await shoesFacFun.renderApi();
            res.json({
                status: 'success',
                data: allData
            });
        } catch (err) {
            res.json({
                status: "error",
                error: err.stack
            });
        }
    };

    let renderApiBrands = async function(req, res) {
        try {
            let allBrands = await shoesFacFun.renderApiBrands();
            res.json({
                status: 'success',
                data: allBrands
            });
        } catch (err) {
            res.json({
                status: "error",
                error: err.stack
            });
        }
    };

    let renderApiColor = async function(req, res) {
        try {
            let allColors = await shoesFacFun.renderApiColor();
            res.json({
                status: 'success',
                data: allColors
            });
        } catch (err) {
            res.json({
                status: "error",
                error: err.stack
            });
        }
    };
    let renderApiSize = async function(req, res) {
        try {
            let allSizes = await shoesFacFun.renderApiSize();
            res.json({
                status: 'success',
                data: allSizes
            });
        } catch (err) {
            res.json({
                status: "error",
                error: err.stack
            });
        }
    };

    let renderApiPrice = async function(req, res) {
        try {
            let allPrices = await shoesFacFun.renderApiPrice();
            res.json({
                status: 'success',
                data: allPrices
            });
        } catch (err) {
            res.json({
                status: "error",
                error: err.stack
            });
        }
    };

    let renderApiId = async function(req, res) {
        try {
            let allId = await shoesFacFun.renderApiId();
            res.json({
                status: 'success',
                data: allId
            });
        } catch (err) {
            res.json({
                status: "error",
                error: err.stack
            });
        }
    };

    return {
        renderApi,
        renderApiBrands,
        renderApiColor,
        renderApiSize,
        renderApiId,
        renderApiPrice
    }
}