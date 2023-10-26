"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
/** App initialization */
const app = (0, express_1.default)();
/** Middlewares */
app.use(express_1.default.json());
/** Port */
const PORT = 3000;
/** Routes */
app.get("/", (req, res) => {
    console.log('Working!!');
    res.send("Hello World!");
});
/** Start */
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
