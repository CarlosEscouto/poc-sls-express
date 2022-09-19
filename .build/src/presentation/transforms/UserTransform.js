"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTransformer = void 0;
var jsonapi_fractal_1 = require("jsonapi-fractal");
var UserTransformer = /** @class */ (function () {
    function UserTransformer() {
        // super()
        this.type = 'users';
        // this.relationships = {
        //   images: this.images,
        // }
    }
    UserTransformer.prototype.transform = function (user) {
        return (0, jsonapi_fractal_1.whitelist)(user, ['id', 'firstName', 'lastName']);
    };
    return UserTransformer;
}());
exports.UserTransformer = UserTransformer;
//# sourceMappingURL=UserTransform.js.map