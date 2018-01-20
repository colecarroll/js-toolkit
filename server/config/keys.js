//determining which credentials to return based on prod or dev environment
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  //app will use dev keys
  module.exports = require("./dev");
}
