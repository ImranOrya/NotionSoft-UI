"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cn = cn;
var clsx_1 = require("clsx");
var tailwind_merge_1 = require("tailwind-merge");
/**
 * Merge Tailwind classes intelligently
 */
function cn() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return (0, tailwind_merge_1.twMerge)(clsx_1.clsx.apply(void 0, inputs));
}
