import * as React from "react";
import {action, computed, observable} from "mobx";
import {ThemeName} from "../themes/Themes";

export default class PreferenceStore {

    @observable
    private _preferredTheme: ThemeName | null = null;

    @computed
    get preferredTheme(): ThemeName {
        return this._preferredTheme || "blue";
    }

    @computed
    get hasThemePreference(): boolean {
        return Boolean(this._preferredTheme);
    }

    @action
    setPreferredTheme(t: ThemeName | null) {
        this._preferredTheme = t;
    }
}

export const preferenceStoreContext = React.createContext(new PreferenceStore());

export const usePreferences = () => React.useContext(preferenceStoreContext);