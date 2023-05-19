const fs = require("fs");

const registerAppointment = (petInfo) => {
    // read JSON file to append info
    const currentContent = fs.readFileSync("citas.json", "utf8");

    //check if a valid number of arguments where entered
    if (petInfo.length == 5) {
        // generate pet info based on array index
        const pet = {
            Name: petInfo[0],
            Age: petInfo[1],
            Type: petInfo[2],
            Color: petInfo[3],
            Illness: petInfo[4],
        };
        // parse current json data from existing file
        var currentDataJson = JSON.parse(currentContent);
        // push new data
        currentDataJson.push(pet);
        // writes new data into citas.json
        fs.writeFileSync("citas.json", JSON.stringify(currentDataJson), (err) => {
            if (err) throw err;
            console.log("New appointment added!");
        });
    } else {
        console.log(
            `Invalid number of arguments, five required, entered ${petInfo.length}`
        );
    }
};

const readAppointments = (fileName) => {
    const read = fs.readFileSync(fileName, "utf8");
    JSON.parse(read).forEach((element) => {
        console.log(element);
    });
};

module.exports = { registerAppointment, readAppointments };