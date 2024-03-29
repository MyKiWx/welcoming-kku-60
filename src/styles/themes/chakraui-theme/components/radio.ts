import {
    checkboxTheme
} from "./checkbox";
import {
    runIfFn
} from "./runIfFn.js";

// src/components/radio.ts
import { radioAnatomy as parts } from "@chakra-ui/anatomy";
import {
    createMultiStyleConfigHelpers,
    defineStyle
} from "@chakra-ui/styled-system";
const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);
const baseStyleControl = defineStyle((props) => {
    let _a;
    const controlStyle = (_a = runIfFn(checkboxTheme.baseStyle, props)) == null ? void 0 : _a.control;
    return {
        ...controlStyle,
        borderRadius: "full",
        _checked: {
            ...controlStyle == null ? void 0 : controlStyle["_checked"],
            _before: {
                content: `""`,
                display: "inline-block",
                pos: "relative",
                w: "50%",
                h: "50%",
                borderRadius: "50%",
                bg: "currentColor"
            }
        }
    };
});
const baseStyle = definePartsStyle((props) => {
    let _a, _b, _c, _d;
    return {
        label: (_b = (_a = checkboxTheme).baseStyle) == null ? void 0 : _b.call(_a, props).label,
        container: (_d = (_c = checkboxTheme).baseStyle) == null ? void 0 : _d.call(_c, props).container,
        control: baseStyleControl(props)
    };
});
const sizes = {
    md: definePartsStyle({
        control: { w: "4", h: "4" },
        label: { fontSize: "md" }
    }),
    lg: definePartsStyle({
        control: { w: "5", h: "5" },
        label: { fontSize: "lg" }
    }),
    sm: definePartsStyle({
        control: { width: "3", height: "3" },
        label: { fontSize: "sm" }
    })
};
const radioTheme = defineMultiStyleConfig({
    baseStyle,
    sizes,
    defaultProps: {
        size: "md",
        colorScheme: "blue"
    }
});

export {
    radioTheme
};
