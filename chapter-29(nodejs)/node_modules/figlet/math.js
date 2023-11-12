const figlet = require("figlet");

figlet(" r u p e n d e r ", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});