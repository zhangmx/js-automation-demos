
// npm install git+https://github.com/octalmage/robotjs.git

var robot = require("robotjs");

// async function outString(str) {
//     await copyString(str);
//     await tap('v', 'control');
//     await sleep(20);
// }
// robot.setUseRandomDelay(false);
// robot.setKeyboardDelay(1)
// Type user's password or something. 
robot.typeString("abc123");

setInterval(async () => {
	// Type user's password or something. 
    console.log(" ==== ")
    robot.typeString("abc123");

}, 1000)