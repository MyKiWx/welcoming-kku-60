import {
    inputTheme
} from "./input";

// src/components/select.ts
import { selectAnatomy as parts } from "@chakra-ui/anatomy";
import {
    createMultiStyleConfigHelpers,
    cssVar,
    defineStyle
} from "@chakra-ui/styled-system";
const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);
const $bg = cssVar("select-bg");
let _a;
const baseStyleField = defineStyle({
    ...(_a = inputTheme.baseStyle) == null ? void 0 : _a.field,
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    bg: $bg.reference,
    [$bg.variable]: "colors.white",
    _dark: {
        [$bg.variable]: "colors.gray.700"
    },
    "> option, > optgroup": {
        bg: $bg.reference
    }
});
const baseStyleIcon = defineStyle({
    width: "6",
    height: "100%",
    insetEnd: "2",
    position: "relative",
    color: "currentColor",
    fontSize: "xl",
    _disabled: {
        opacity: 0.5
    }
});
const baseStyle = definePartsStyle({
    field: baseStyleField,
    icon: baseStyleIcon
});
const iconSpacing = defineStyle({
    paddingInlineEnd: "8"
});
let _a2, _b, _c, _d, _e, _f, _g, _h;
const sizes = {
    lg: {
        ...(_a2 = inputTheme.sizes) == null ? void 0 : _a2.lg,
        field: {
            ...(_b = inputTheme.sizes) == null ? void 0 : _b.lg.field,
            ...iconSpacing
        }
    },
    md: {
        ...(_c = inputTheme.sizes) == null ? void 0 : _c.md,
        field: {
            ...(_d = inputTheme.sizes) == null ? void 0 : _d.md.field,
            ...iconSpacing
        }
    },
    sm: {
        ...(_e = inputTheme.sizes) == null ? void 0 : _e.sm,
        field: {
            ...(_f = inputTheme.sizes) == null ? void 0 : _f.sm.field,
            ...iconSpacing
        }
    },
    xs: {
        ...(_g = inputTheme.sizes) == null ? void 0 : _g.xs,
        field: {
            ...(_h = inputTheme.sizes) == null ? void 0 : _h.xs.field,
            ...iconSpacing
        },
        icon: {
            insetEnd: "1"
        }
    }
};
const selectTheme = defineMultiStyleConfig({
    baseStyle,
    sizes,
    variants: inputTheme.variants,
    defaultProps: inputTheme.defaultProps
});

export {
    selectTheme
};
