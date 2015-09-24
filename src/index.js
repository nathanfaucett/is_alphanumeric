var isAlphabetic = require("is_alphabetic"),
    isNumeric = require("is_numeric");


var isAlphabeticCode = isAlphabetic.code,
    isNumericCode = isNumeric.code;


module.exports = isAlphanumeric;


function isAlphanumeric(ch) {
    return isAlphanumericCode(ch.charCodeAt(0));
}

isAlphanumeric.code = isAlphanumericCode;

function isAlphanumericCode(charCode) {
    return isAlphabeticCode(charCode) || isNumericCode(charCode);
}
