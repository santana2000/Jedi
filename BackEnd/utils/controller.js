'use strict';

const fs = require("fs");
const path = require("path");

function addControllers() {
    // scan the directory of controller
    let files = fs.readdirSync(path.join(__dirname, "..", "controllers"));

    // filter .js
    let js_files = files.filter((item) => {
        return item.endsWith(".js");
    });

    let routers = [];
    for (let item of js_files) {
        console.log(`process controllers: ${item}...`);
        // get .js file
        let mapping = require(path.join(__dirname, "..", "controllers", item));
        routers.push(mapping);
    }
    return routers;
}

module.exports = function() {
    return addControllers();
}