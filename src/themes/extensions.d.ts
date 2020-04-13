import * as createPalette from '@material-ui/core/styles/createPalette';

// Type extensions for the material ui theme
declare module '@material-ui/core/styles/createPalette' {

    // The following two shims allow us to add a fully custom palette type

    // The options for a custom palette. Options should be optional - any keys not specified should be
    // populated with defaults later
    import {PaletteColorOptions} from "@material-ui/core";

    interface IconPaletteColorOptions {
        // example icon with specific color
        login?: string;
    }

    // The actual values used at runtime for the custom palette - all values should be supplied
    interface IconPaletteColor {
        // example icon with specific color
        login: string;
    }

    // The following two interfaces extend the ones provided by material UI to include extra palettes
    //  - the 'menu' palette is a standard material ui palette with 'main', 'light', 'dark' etc.
    //  - the 'icon' palette is a custom palette with its own keys

    // The options to add to PaletteOptions. All of these should be optional (e.g. with a ?)
    interface PaletteOptions {
        menu?: PaletteColorOptions;
        icon?: IconPaletteColorOptions;
    }

    // The runtime values actually received by a component. All values should be specified (e.g. not null or undefined)
    interface Palette {
        menu: PaletteColorOptions
        icon: IconPaletteColor;
    }
}