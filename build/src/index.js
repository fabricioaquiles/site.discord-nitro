"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("alpinejs");
//Src
var nitro_1 = __importDefault(require("./nitro"));
var voltar_1 = __importDefault(require("./voltar"));
//Helpers
var hashHelper_1 = __importDefault(require("../helpers/hashHelper"));
var componentsHelper_1 = __importDefault(require("../helpers/componentsHelper"));
function loadComponent() {
    var _a = (0, hashHelper_1.default)(), component = _a.component, placeholder = _a.placeholder, uri = _a.uri;
    (0, componentsHelper_1.default)(component, placeholder, uri);
}
loadComponent();
(0, voltar_1.default)();
(0, nitro_1.default)();
window.addEventListener("hashchange", function () {
    loadComponent();
    (0, voltar_1.default)();
    (0, nitro_1.default)();
});
