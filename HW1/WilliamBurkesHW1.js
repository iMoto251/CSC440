// We need to change each string to the correct format 
/* 
Part 1:
1. camelCase: changeFormatToThis
2. snakeCase: change_format_to_this
3. dashCase/kebabCase: change-format-to-this
4. dotCase: change.format.to.this
5. pathCase: change/format/to/this
6. properCase/pascalCase: ChangeFormatToThis
7. lowerCase: change format to this
8. sentenceCase: Change format to this
9. constantCase: CHANGE_FORMAT_TO_THIS
10. titleCase: Change Format To This

Part 2:
convert anything that is not alphanumeric character to escape sequence
string.charCodeAt() gets integer value, convert integer to hex representation 
*/

//Part 1

const fs = require('fs');

let file = "input.txt";

let data = fs.readFileSync(process.cwd() + "/" + file).toString().toLowerCase();

function camelCase(string) {
    return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, i) {
        return i == 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
};

function snakeCase(string) {
    return string.replace(/ /g, "_").toLowerCase();
};

function kebabCase(string) {
    return string.replace(/ /g, "-").toLowerCase();
};

function dotCase(string) {
    return string.replace(/ /g, ".").toLowerCase();
};

function pathCase(string) {
    return string.replace(/ /g, "/").toLowerCase();
};

function properCase(string) {
    return string.replace(/\w+/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1);
    }).replace(/\s/g, "");
};

function lowerCase(string) {
    return string.toLowerCase();
};

function sentenceCase(string) {
    return string.replace(/^\w/, function (character) {
        return character.toUpperCase();
    })
};

function constantCase(string) {
    return string.replace(/ /g, "_").toUpperCase();
};

function titleCase(string) {
    return string.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
};

var camelString = camelCase(data);
var snakeString = snakeCase(data);
var kebabString = kebabCase(data);
var dotString = dotCase(data);
var pathString = pathCase(data);
var properString = properCase(data);
var lowerCaseString = lowerCase(data);
var sentenceString = sentenceCase(data);
var constantString = constantCase(data);
var titleString = titleCase(data);

console.log("String in camelCase is: " + camelString);
console.log("String in snakeCase is: " + snakeString);
console.log("String in kebabCase is: " + kebabString);
console.log("String in dotCase is: " + dotString);
console.log("String in pathCase is: " + pathString);
console.log("String in properCase is: " + properString);
console.log("String in lowerCase is: " + lowerCaseString);
console.log("String in sentenceCase is: " + sentenceString);
console.log("String in constantCase is: " + constantString);
console.log("String in titleCase is: " + titleString);

// End of Part 1

// Part 2 
/* 
Write 3 different functions in the context of html, JavaScript and JSON.
Take string as parameter and then return appropriately escaped string.
*/

var unsafeString = "35 is > 25! But 25 is > 12 we've/ understood that";

function escapeHTML (string) {
    return string.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
}
console.log("HTML Context");
console.log("Unsafe string is: " + unsafeString + " \nEscaped string is: " + escapeHTML(unsafeString) + "\n");

function escapeJavascript (string) {
    return string.replace(/[\s\S]/g, function (escape) {
        return " " + ( escape.charCodeAt().toString(10)).slice(-4);
      });
    }
console.log("Javascript context");
console.log("Unsafe string is: " + unsafeString + " \nEscaped string is: " + escapeJavascript(unsafeString) + "\n");


let jsonObject = {
    name: "William\r",
    age: "22'",
    gender: "male",
    height: "5\9",
};
jsonObject = JSON.stringify(jsonObject);
var escapedJSON = JSON.parse(jsonObject);

function escapeJSON (string) {
    return string.replace(/\\n/g, "\\n")
    .replace(/\\'/g, "\\'")
    .replace(/\\"/g, '\\"')
    .replace(/\\&/g, "\\&")
    .replace(/\\r/g, "\\r")
    .replace(/\\t/g, "\\t")
    .replace(/\\b/g, "\\b")
    .replace(/\\f/g, "\\f");
};

console.log(escapeJSON(jsonObject));
console.log(escapedJSON)
console.log("JSON context");
console.log("Unsafe string is: " + jsonObject + " \nEscaped string is: " + escapeJSON(jsonObject));