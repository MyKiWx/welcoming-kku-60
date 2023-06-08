import {
    inputTheme
} from "./input";

// src/components/textarea.ts
import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
let _a;
const baseStyle = defineStyle({
    ...(_a = inputTheme.baseStyle) == null ? void 0 : _a.field,
    paddingY: "2",
    minHeight: "20",
    lineHeight: "short",
    verticalAlign: "top"
});
let _a2, _b;
const variants = {
    outline: defineStyle(
        (props) => {
            let _a4, _b3;
            return (_b3 = (_a4 = inputTheme.variants) == null ? void 0 : _a4.outline(props).field) != null ? _b3 : {};
        }
    ),
    flushed: defineStyle(
        (props) => {
            let _a4, _b3;
            return (_b3 = (_a4 = inputTheme.variants) == null ? void 0 : _a4.flushed(props).field) != null ? _b3 : {};
        }
    ),
    filled: defineStyle(
        (props) => {
            let _a4, _b3;
            return (_b3 = (_a4 = inputTheme.variants) == null ? void 0 : _a4.filled(props).field) != null ? _b3 : {};
        }
    ),
    unstyled: (_b = (_a2 = inputTheme.variants) == null ? void 0 : _a2.unstyled.field) != null ? _b : {}
};
let _a3, _b2, _c, _d, _e, _f, _g, _h;
const sizes = {
    xs: (_b2 = (_a3 = inputTheme.sizes) == null ? void 0 : _a3.xs.field) != null ? _b2 : {},
    sm: (_d = (_c = inputTheme.sizes) == null ? void 0 : _c.sm.field) != null ? _d : {},
    md: (_f = (_e = inputTheme.sizes) == null ? void 0 : _e.md.field) != null ? _f : {},
    lg: (_h = (_g = inputTheme.sizes) == null ? void 0 : _g.lg.field) != null ? _h : {}
};
const textareaTheme = defineStyleConfig({
    baseStyle,
    sizes,
    variants,
    defaultProps: {
        size: "md",
        variant: "outline"
    }
});

export {
    textareaTheme
};
