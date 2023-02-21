"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const product_router_1 = __importDefault(require("./src/router/product.router"));
const PORT = 3000;
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views');
const DB = 'mongodb://127.0.0.1:27017/produst';
mongoose_1.default.connect(DB)
    .then(() => console.log('DB connection!'))
    .catch(error => console.log('DB connection error:', error.message));
app.use(body_parser_1.default.json());
app.use('/product', product_router_1.default);
app.listen(PORT, () => {
    console.log("App running on port:" + PORT);
});
//# sourceMappingURL=index.js.map