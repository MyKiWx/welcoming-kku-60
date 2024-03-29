import {
    fontSizes
} from "../foundations/fontSizes";
import {
    inputTheme
} from "./input";
import {
    runIfFn
} from "./runIfFn.js";

// src/components/number-input.ts
import { numberInputAnatomy as parts } from "@chakra-ui/anatomy";
import {
    createMultiStyleConfigHelpers,
    defineStyle
} from "@chakra-ui/styled-system";
import { calc, cssVar } from "@chakra-ui/theme-tools";
const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);
const $stepperWidth = cssVar("number-input-stepper-width");
const $inputPadding = cssVar("number-input-input-padding");
const inputPaddingValue = calc($stepperWidth).add("0.5rem").toString();
const $bg = cssVar("number-input-bg");
const $fg = cssVar("number-input-color");
const $border = cssVar("number-input-border-color");
const baseStyleRoot = defineStyle({
    [$stepperWidth.variable]: "sizes.6",
    [$inputPadding.variable]: inputPaddingValue
});
const baseStyleField = defineStyle(
    (props) => {
        let _a, _b;
        return (_b = (_a = runIfFn(inputTheme.baseStyle, props)) == null ? void 0 : _a.field) != null ? _b : {};
    }
);
const baseStyleStepperGroup = defineStyle({
    width: $stepperWidth.reference
});
const baseStyleStepper = defineStyle({
    borderStart: "1px solid",
    borderStartColor: $border.reference,
    color: $fg.reference,
    bg: $bg.reference,
    [$fg.variable]: "colors.chakra-body-text",
    [$border.variable]: "colors.chakra-border-color",
    _dark: {
        [$fg.variable]: "colors.whiteAlpha.800",
        [$border.variable]: "colors.whiteAlpha.300"
    },
    _active: {
        [$bg.variable]: "colors.gray.200",
        _dark: {
            [$bg.variable]: "colors.whiteAlpha.300"
        }
    },
    _disabled: {
        opacity: 0.4,
        cursor: "not-allowed"
    }
});
const baseStyle = definePartsStyle((props) => {
    let _a;
    return {
        root: baseStyleRoot,
        field: (_a = runIfFn(baseStyleField, props)) != null ? _a : {},
        stepperGroup: baseStyleStepperGroup,
        stepper: baseStyleStepper
    };
});
function getSize(size: string) {
    let _a: any, _b: any, _c: any;
    const sizeStyle = (_a = inputTheme.sizes) == null ? void 0 : _a[size];
    const radius: any = {
        lg: "md",
        md: "md",
        sm: "sm",
        xs: "sm"
    };
    const _fontSize = (_c = (_b = sizeStyle.field) == null ? void 0 : _b.fontSize) != null ? _c : "md";
    const fontSize = _fontSize;
    return definePartsStyle({
        field: {
            ...sizeStyle.field,
            paddingInlineEnd: $inputPadding.reference,
            verticalAlign: "top"
        },
        stepper: {
            fontSize: calc(fontSize).multiply(0.75).toString(),
            _first: {
                borderTopEndRadius: radius[size]
            },
            _last: {
                borderBottomEndRadius: radius[size],
                mt: "-1px",
                borderTopWidth: 1
            }
        }
    });
}
const sizes = {
    xs: getSize("xs"),
    sm: getSize("sm"),
    md: getSize("md"),
    lg: getSize("lg")
};
const numberInputTheme = defineMultiStyleConfig({
    baseStyle,
    sizes,
    variants: inputTheme.variants,
    defaultProps: inputTheme.defaultProps
});

export {
    numberInputTheme
};
