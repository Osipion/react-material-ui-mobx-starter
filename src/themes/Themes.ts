import Blue from "./Blue"
import Red from "./Red"
import {createMuiTheme} from "@material-ui/core";

// A map of all the available themes that can be referenced from anywhere.
const Themes = Object.freeze({
    blue: createMuiTheme(Blue),
    red: createMuiTheme(Red)
});

// sometimes it's useful to have a type name for the object
export type ThemeMap = typeof Themes;

// a type representing all the theme names available
export type ThemeName = keyof ThemeMap;

export default Themes;