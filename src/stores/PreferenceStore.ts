import * as React from "react";
import {action, computed, observable} from "mobx";
import {ThemeName} from "../themes/Themes";

// A mobx store that manages the user's preferences. At the moment the only preference is the theme
export default class PreferenceStore {

    // the users preferred theme - this is private as if a caller sets it directly, mobx may not propagate the
    // update
    @observable
    private _preferredTheme: ThemeName | null = null;

    // allow callers to read the current preferred theme, defaulting to blue if none is set
    @computed
    get preferredTheme(): ThemeName {
        return this._preferredTheme || "blue";
    }

    // allow callers to check if a theme preference has been set
    @computed
    get hasThemePreference(): boolean {
        return Boolean(this._preferredTheme);
    }

    // set the preferred theme - note the '@action' annotation, which notifies mobx that invocations of this function
    // may mutate mobx managed state.
    @action
    setPreferredTheme(t: ThemeName | null) {
        this._preferredTheme = t;
    }
}

// a context that can be used from within React components
export const preferenceStoreContext = React.createContext(new PreferenceStore());

// a helper Hook that allows our components to gain easy access to the preference store.
export const usePreferences = () => React.useContext(preferenceStoreContext);