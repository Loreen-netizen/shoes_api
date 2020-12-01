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

axios
    .get("https://shoe-api-yeu.herokuapp.com/api/color")
    .then(function(results) {
        colorsList.innerHTML = colorsTemplate({
            colors: results.data
        });
    });

axios
    .get("http://localhost:3033/api/shoes/brand_name")
    .then(function(results) {
        brandsList.innerHTML = brandsTemplate({
            brands: results.data
        });
    });

axios
    .get("https://shoe-api-yeu.herokuapp.com/api/size")
    .then(function(results) {
        sizesList.innerHTML = sizesTemplate({
            sizes: results.data
        });
    });