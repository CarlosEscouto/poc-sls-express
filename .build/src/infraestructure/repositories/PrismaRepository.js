"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaRepository = void 0;
/**
 *
 */
var PrismaRepository = /** @class */ (function () {
    function PrismaRepository() {
        this.allowFilter = [];
        this.allowField = [];
        this.allowSort = [];
    }
    /**
     *
     * @param field
     * @returns
     */
    PrismaRepository.prototype.converterField = function (field) {
        var _a;
        if (!field)
            return;
        return _a = {}, _a[field] = true, _a;
    };
    /**
     *
     * @param filter
     * @returns
     */
    PrismaRepository.prototype.converterFilter = function (filter) {
        return filter;
    };
    /**
     *
     * @param sort
     * @returns
     */
    PrismaRepository.prototype.converterSort = function (sort) {
        var _a;
        if (!sort)
            return;
        var direction = sort.search('-') === 0
            ? 'desc'
            : 'asc';
        return _a = {}, _a[sort.replace('-', '')] = direction, _a;
    };
    return PrismaRepository;
}());
exports.PrismaRepository = PrismaRepository;
//# sourceMappingURL=PrismaRepository.js.map