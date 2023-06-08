import { sizes_default } from '../foundations/sizes';
import {
    runIfFn
} from "./runIfFn.js";

// src/components/avatar.ts
import { avatarAnatomy as parts } from "@chakra-ui/anatomy";
import {
    createMultiStyleConfigHelpers,
    cssVar,
    defineStyle
} from "@chakra-ui/styled-system";
import { isDark, randomColor } from "@chakra-ui/theme-tools";
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);
const $border = cssVar("avatar-border-color");
const $bg = cssVar("avatar-bg");
const baseStyleBadge = defineStyle({
    borderRadius: "full",
    border: "0.2em solid",
    [$border.variable]: "white",
    _dark: {
        [$border.variable]: "colors.gray.800"
    },
    borderColor: $border.reference
});
const baseStyleExcessLabel = defineStyle({
    [$bg.variable]: "colors.gray.200",
    _dark: {
        [$bg.variable]: "colors.whiteAlpha.400"
    },
    bgColor: $bg.reference
});
const $avatarBg = cssVar("avatar-background");
const baseStyleContainer = defineStyle((props) => {
    const { name, theme } = props;
    const bg = name ? randomColor({ string: name }) : "colors.gray.400";
    const isBgDark = isDark(bg)(theme);
    let color = "white";
    if (!isBgDark)
        color = "gray.800";
    return {
        bg: $avatarBg.reference,
        "&:not([data-loaded])": {
            [$avatarBg.variable]: bg
        },
        color,
        [$border.variable]: "colors.white",
        _dark: {
            [$border.variable]: "colors.gray.800"
        },
        borderColor: $border.reference,
        verticalAlign: "top"
    };
});
const baseStyle = definePartsStyle((props) => ({
    badge: runIfFn(baseStyleBadge, props),
    excessLabel: runIfFn(baseStyleExcessLabel, props),
    container: runIfFn(baseStyleContainer, props)
}));
function getSize(size: string | number) {
    // const themeSize = size !== "100%" ? sizes_default[size] : void 0;
    const themeSize = size !== "100%" ? size : void 0;
    return definePartsStyle({
        container: {
            width: size,
            height: size,
            fontSize: `calc(${themeSize != null ? themeSize : size} / 2.5)`
        },
        excessLabel: {
            width: size,
            height: size
        },
        label: {
            fontSize: `calc(${themeSize != null ? themeSize : size} / 2.5)`,
            lineHeight: size !== "100%" ? themeSize != null ? themeSize : size : void 0
        }
    });
}
const sizes = {
    "2xs": getSize(4),
    xs: getSize(6),
    sm: getSize(8),
    md: getSize(12),
    lg: getSize(16),
    xl: getSize(24),
    "2xl": getSize(32),
    full: getSize("100%")
};
const avatarTheme = defineMultiStyleConfig({
    baseStyle,
    sizes,
    defaultProps: { size: "md" }
});

export {
    avatarTheme
};
