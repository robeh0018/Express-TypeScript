import express from "express";

/** Routes imports */
import diariesRoutes from "./routes/diaries.routes";

/** App initialization */
const app = express();

/** Middlewares */
app.use(express.json());

/** Port */
const PORT = 3000;

/** Routes */
app.get("/", (req, res) => {
    console.log('Working!!');
    res.send("Hello dd!");
});

/** Diaries Routes*/
app.use("/api/v1/diaries", diariesRoutes);


/** Start */
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
