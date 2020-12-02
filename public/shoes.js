const sizesElem = document.querySelector(".sizes");
const sizesList = document.querySelector(".sizesList");
const sizesTemplateText = document.querySelector(".sizesTemplateText").innerHTML;
const sizesTemplate = Handlebars.compile(sizesTemplateText);

const brandsElem = document.querySelector(".brands");
const brandsList = document.querySelector(".brandsList");
const brandsTemplateText = document.querySelector(".brandsTemplateText").innerHTML;
const brandsTemplate = Handlebars.compile(brandsTemplateText);

const colorsElem = document.querySelector(".colors");
const colorsList = document.querySelector(".colorsList");
const colorsTemplateText = document.querySelector(".colorsTemplateText").innerHTML;
const colorsTemplate = Handlebars.compile(colorsTemplateText);
const filterButtonElem = document.querySelector(".filter");

const allShoesElem = document.querySelector(".allShoes");
const allShoesList = document.querySelector(".allShoesList");
const allShoesTemplateText = document.querySelector(".allShoesTemplateText").innerHTML;
const allShoesTemplate = Handlebars.compile(allShoesTemplateText);


axios
    .get("/api/shoes")
    .then(function(results) {
        let response = results.data;
        let data = response.data;
        allShoesList.innerHTML = allShoesTemplate({
            allShoes: data
        });
    });

axios
    .get("/api/shoes/color")
    .then(function(results) {
        let response = results.data;
        let data = response.data;
        colorsList.innerHTML = colorsTemplate({
            colors: data
        });
    });

axios
    .get("/api/shoes/brand_name")
    .then(function(results) {
        let response = results.data;
        let data = response.data;
        brandsList.innerHTML = brandsTemplate({
            brands: data
        });
    });

axios
    .get("/api/shoes/size")
    .then(function(results) {
        let response = results.data;
        let data = response.data;
        sizesList.innerHTML = sizesTemplate({
            sizes: data
        });
    });
let sizesFun = function() {
    axios
        .get("/api/shoes")
        .then(function(results) {
            // sizesList.innerHTML = sizesTemplate({
            let sizes = results.data;
            console.log(sizes);
        }).catch(e => console.log(e))
}

// });
filterButtonElem.addEventListener("click", sizesFun)