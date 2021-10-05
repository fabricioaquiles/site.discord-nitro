"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_module_scss_1 = __importDefault(require("./scss/styles.module.scss"));
function components() {
    var title = function () {
        return "Reposit\u00F3rio";
    };
    var render = function () {
        return (react_1.default.createElement("div", { className: styles_module_scss_1.default.card },
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col-md-4" },
                    react_1.default.createElement("div", { className: "form-group" },
                        react_1.default.createElement("h2", null, "Linguagens utilizadas"),
                        react_1.default.createElement("p", null, "Abaixo as linguagens que foram utilizadas neste site."),
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("img", { className: styles_module_scss_1.default.img, src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", alt: "javascript", width: "40", height: "40" }),
                        react_1.default.createElement("img", { className: styles_module_scss_1.default.img, src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", alt: "javascript", width: "40", height: "40" }),
                        react_1.default.createElement("img", { className: styles_module_scss_1.default.img, src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", alt: "javascript", width: "40", height: "40" }),
                        react_1.default.createElement("br", null))),
                react_1.default.createElement("div", { className: "col-md-4" },
                    react_1.default.createElement("p", null, "Clique no bot\u00E3o abaixo, para ser enviado ao reposit\u00F3rio deste site."),
                    react_1.default.createElement("a", { target: "_blank", href: "https://github.com/oDustDev/site.discord-nitro", className: styles_module_scss_1.default.btn }, "Clique aqui")))));
    };
    return {
        title: title,
        render: render,
    };
}
exports.default = components();
