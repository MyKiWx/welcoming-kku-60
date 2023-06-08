// src/components/list.ts
import { listAnatomy as parts } from "@chakra-ui/anatomy";
import {
    createMultiStyleConfigHelpers,
    defineStyle
} from "@chakra-ui/styled-system";
const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);
const baseStyleIcon = defineStyle({
    marginEnd: "2",
    display: "inline",
    verticalAlign: "text-bottom"
});
const baseStyle = definePartsStyle({
    icon: baseStyleIcon
});
const listTheme = defineMultiStyleConfig({
    baseStyle
});

export {
    listTheme
};
