const {keyboard, Key} = require("@nut-tree/nut-js");
// https://nutjs.dev/apidoc/keyboard
keyboard.config.autoDelayMs = 0;

setInterval(async () => {
	// Type user's password or something. 
    console.log(" ==== ")
    // await keyboard.type(Key.LeftSuper, Key.Space);
    await keyboard.type("cccalculator");

}, 1000)