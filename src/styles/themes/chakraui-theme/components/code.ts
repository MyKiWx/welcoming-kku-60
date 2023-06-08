import {
    badgeTheme
} from "./badge";

// src/components/code.ts
import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
const { variants, defaultProps } = badgeTheme;
const baseStyle = defineStyle({
    fontFamily: "mono",
    fontSize: "sm",
    px: "0.2em",
    borderRadius: "sm"
});
const codeTheme = defineStyleConfig({
    baseStyle,
    variants,
    defaultProps
});

export {
    codeTheme
};
