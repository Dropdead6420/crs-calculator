const app = require("./src/index");
const { connectToDB } = require("./src/config/db");
const { port } = require("./src/config/env");

app.listen(port, async () => {
    await connectToDB();
    console.log(`Server listening on ${port} Port`);
})