"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.use("/", express_1.default.static('./public'));
app.get('*', function (req, res) {
    res.redirect("/#" + req.url);
});
app.listen(process.env.PORT || 5000, function () {
    console.log("Servidor rodando");
});
