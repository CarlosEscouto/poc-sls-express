"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var UserRoute_1 = require("./UserRoute");
var router = express_1.default.Router();
router.use('/users', UserRoute_1.UserRoutes);
exports.default = router;
//# sourceMappingURL=index.js.map