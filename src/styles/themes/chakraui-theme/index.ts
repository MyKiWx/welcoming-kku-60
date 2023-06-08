// theme/index
import { extendTheme } from '@chakra-ui/react'

import { accordionTheme as Accordion } from './components/accordion';
import { alertTheme as Alert } from './components/alert';
import { avatarTheme as Avatar } from './components/avatar';
import { badgeTheme as Badge } from './components/badge';
import { breadcrumbTheme as Breadcrumb } from './components/breadcrumb';
import { buttonTheme as Button } from './components/button';
import { checkboxTheme as Checkbox } from './components/checkbox';
import { closeButtonTheme as CloseButton } from './components/close-button';
import { codeTheme as Code } from './components/code';
import { containerTheme as Container } from './components/container';
import { dividerTheme as Divider } from './components/divider';
import { drawerTheme as Drawer } from './components/drawer';
import { editableTheme as Editable } from './components/editable';
import { formTheme as Form } from './components/form-control';
import { formErrorTheme as FormError } from './components/form-error';
import { formLabelTheme as FormLabel } from './components/form-label';
import { headingTheme as Heading } from './components/heading';
import { inputTheme as Input } from './components/input';
import { kbdTheme as Kbd } from './components/kbd';
import { linkTheme as Link } from './components/link';
import { listTheme as List } from './components/list';
import { menuTheme as Menu } from './components/menu';
import { modalTheme as Modal } from './components/modal';
import { numberInputTheme as NumberInput } from './components/number-input';
import { pinInputTheme as PinInput } from './components/pin-input';
import { popoverTheme as Popover } from './components/popover';
import { progressTheme as Progress } from './components/progress';
import { radioTheme as Radio } from './components/radio';
import { selectTheme as Select } from './components/select';
import { skeletonTheme as Skeleton } from './components/skeleton';
import { skipLinkTheme as SkipLink } from './components/skip-link';
import { sliderTheme as Slider } from './components/slider';
import { spinnerTheme as Spinner } from './components/spinner';
import { statTheme as Stat } from './components/stat';
import { switchTheme as Switch } from './components/switch';
import { tableTheme as Table } from './components/table';
import { tabsTheme as Tabs } from './components/tabs';
import { tagTheme as Tag } from './components/tag';
import { textareaTheme as Textarea } from './components/textarea';
import { tooltipTheme as Tooltip } from './components/tooltip';

import { blur } from './foundations/blur';
import { borders } from './foundations/borders';
import { breakpoints } from './foundations/breakpoints';
import { colors } from './foundations/colors';
import { fonts } from './foundations/fonts';
import { fontSizes } from './foundations/fontSizes';
import { fontWeights } from './foundations/fontWeights';
import { letterSpacings } from './foundations/letterSpacings';
import { lineHeights } from './foundations/lineHeights';
import { radii } from './foundations/radii';
import { shadows } from './foundations/shadows';
import { sizes } from './foundations/sizes';
import { spacing } from './foundations/spacing';
import { transition } from './foundations/transition';
import { zIndices } from './foundations/z-index';

const overrides = {
    blur,
    borders,
    breakpoints,
    colors,
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    radii,
    shadows,
    sizes,
    spacing,
    transition,
    zIndices,
    // Other foundational style overrides go here

    components: {
        Accordion,
        Alert,
        Avatar,
        Badge,
        Breadcrumb,
        Button,
        Checkbox,
        CloseButton,
        Code,
        Container,
        Divider,
        Drawer,
        Editable,
        Form,
        FormError,
        FormLabel,
        Heading,
        Input,
        Kbd,
        Link,
        List,
        Menu,
        Modal,
        NumberInput,
        PinInput,
        Popover,
        Progress,
        Radio,
        Select,
        Skeleton,
        SkipLink,
        Slider,
        Spinner,
        Stat,
        Switch,
        Table,
        Tabs,
        Tag,
        Textarea,
        Tooltip,
        // Other components go here
    },
}

export default extendTheme(overrides)