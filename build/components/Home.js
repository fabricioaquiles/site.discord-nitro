"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_module_scss_1 = __importDefault(require("./scss/styles.module.scss"));
function components() {
    var title = function () {
        return "Pagina inicial";
    };
    var render = function () {
        return (react_1.default.createElement("div", { className: styles_module_scss_1.default.card },
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col-md-4" },
                    react_1.default.createElement("div", { className: "form-group" },
                        react_1.default.createElement("input", { id: "nitroCode", className: "form-control", placeholder: "https://discord.gift/3GeMQJftuqq4rvndU", name: "name" }))),
                react_1.default.createElement("div", { className: "col-md-4" },
                    react_1.default.createElement("button", { id: "nitroButton", className: styles_module_scss_1.default.btn }, "Gerar nitro")))));
    };
    return {
        title: title,
        render: render,
    };
}
exports.default = components();
