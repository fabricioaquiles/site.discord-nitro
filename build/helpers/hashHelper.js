"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hashInfo = function () {
    var hash = window.location.hash;
    var hashSplit = hash.split("/");
    var component = hashSplit[1] ? "/" + hashSplit[1] : '/';
    var placeholder = hashSplit[2] ? '/:id' : '';
    var param = function (index) {
        var _a;
        if (index === void 0) { index = 2; }
        return (_a = hashSplit[index]) !== null && _a !== void 0 ? _a : '';
    };
    var uri = hash.substr(1);
    return {
        component: component,
        placeholder: placeholder,
        uri: uri,
        param: param,
    };
};
exports.default = hashInfo;
