const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    return res.status(200).json({ title: "HexBytes", message: "CRM Calculator", Status: true });
})

const authRouter = require("./routes/Auth.route");
app.use("/api/admin", authRouter);

// const authRouter = require("./routes/.route");
// app.use("/api/user", userRouter);

// const userRouter = require("./routes/user.route");
// app.use("/api/user", userRouter);



// const agePointsRouter = require("./routes/AgePoints.route");
// app.use("/super-admin/age_points", agePointsRouter);

// const productRouter = require("./routes/product.route");
// app.use("/api/product", productRouter);

// const categoryRouter = require("./routes/category.route");
// app.use("/api/category", categoryRouter);

// // const serviceRoute = require("./routes/product.route");
// // app.use("/api/product", serviceRouter);

// const adminProductRouter = require("./routes/adminProduct.route");
// app.use("/api/admin/product", adminProductRouter);

// const cartRouter = require("./routes/cart.route");
// app.use("/api/cart", cartRouter);

// const cartItemRouter = require("./routes/cartItem.route");
// app.use("/api/cart_items", cartItemRouter);

// const orderRouter = require("./routes/order.route");
// app.use("/api/order", orderRouter);

// const adminOrderRouter = require("./routes/adminOrder.route");
// app.use("/api/admin/order", adminOrderRouter);

module.exports = app;