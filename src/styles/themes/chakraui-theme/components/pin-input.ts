import {
    inputTheme
} from "./input";
import {
    runIfFn
} from "./runIfFn.js";

// src/components/pin-input.ts
import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
let _a;
const baseStyle = defineStyle({
    ...(_a = inputTheme.baseStyle) == null ? void 0 : _a.field,
    textAlign: "center"
});
const sizes = {
    lg: defineStyle({
        fontSize: "lg",
        w: 12,
        h: 12,
        borderRadius: "md"
    }),
    md: defineStyle({
        fontSize: "md",
        w: 10,
        h: 10,
        borderRadius: "md"
    }),
    sm: defineStyle({
        fontSize: "sm",
        w: 8,
        h: 8,
        borderRadius: "sm"
    }),
    xs: defineStyle({
        fontSize: "xs",
        w: 6,
        h: 6,
        borderRadius: "sm"
    })
};
let _a2, _b;
const variants = {
    outline: defineStyle(
        (props) => {
            let _a3, _b2, _c;
            return (_c = (_b2 = runIfFn((_a3 = inputTheme.variants) == null ? void 0 : _a3.outline, props)) == null ? void 0 : _b2.field) != null ? _c : {};
        }
    ),
    flushed: defineStyle(
        (props) => {
            let _a3, _b2, _c;
            return (_c = (_b2 = runIfFn((_a3 = inputTheme.variants) == null ? void 0 : _a3.flushed, props)) == null ? void 0 : _b2.field) != null ? _c : {};
        }
    ),
    filled: defineStyle(
        (props) => {
            let _a3, _b2, _c;
            return (_c = (_b2 = runIfFn((_a3 = inputTheme.variants) == null ? void 0 : _a3.filled, props)) == null ? void 0 : _b2.field) != null ? _c : {};
        }
    ),
    unstyled: (_b = (_a2 = inputTheme.variants) == null ? void 0 : _a2.unstyled.field) != null ? _b : {}
};
const pinInputTheme = defineStyleConfig({
    baseStyle,
    sizes,
    variants,
    defaultProps: inputTheme.defaultProps
});

export {
    pinInputTheme
};
