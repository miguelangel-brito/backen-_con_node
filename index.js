const args = process.argv.slice(2);
const { registerAppointment, readAppointments } = require("./operaciones.js");

if (args[0] != null) {
    // check if a valid action was entered
    if (args[0] == "register" || args[0] == "read") {
        switch (args[0]) {
            case (args[0] = "register"):
                registerAppointment(args.slice(1));
                break;
            case (args[0] = "read"):
                readAppointments("citas.json");
                break;
        }
    } else {
        console.log(`${args[0]} is not a valid action`);
    }
} else {
    //check if at least one action was entered
    console.log("Please Enter an Action!");
}