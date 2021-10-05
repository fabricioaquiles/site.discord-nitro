"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hashHelper_1 = __importDefault(require("../helpers/hashHelper"));
var componentsHelper_1 = __importDefault(require("../helpers/componentsHelper"));
var voltar = function () {
    var voltarButton = document.querySelector("#voltarButton");
    if (voltarButton) {
        voltarButton.addEventListener('click', function (e) {
            e.preventDefault();
            location.href = "/#/";
            var _a = (0, hashHelper_1.default)(), component = _a.component, placeholder = _a.placeholder, uri = _a.uri;
            (0, componentsHelper_1.default)(component, placeholder, uri);
        });
    }
};
exports.default = voltar;
