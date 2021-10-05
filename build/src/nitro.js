"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nitro = function () {
    var nitroButton = document.querySelector("#nitroButton");
    if (nitroButton) {
        nitroButton.addEventListener('click', function (e) {
            e.preventDefault();
            var input = document.querySelector("#nitroCode");
            var random = function (length) {
                if (length === void 0) { length = 8; }
                var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var str = '';
                for (var i = 0; i < length; i++) {
                    str += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return str;
            };
            input.value = "https://discord.gift/" + random(17);
        });
    }
};
exports.default = nitro;
