import React from 'react';
import {ThemeProvider} from "@material-ui/styles";
import {usePreferences} from "./stores/PreferenceStore";
import Themes from "./themes/Themes";
import MainView from "./components/MainView";
import {observer} from "mobx-react";

// The App root component. This component provides the general context for the app, including setting up the theme
const App = observer(() => {

    // we're allowing the user to choose the theme, which is set in the preferences store (./stores/PreferenceStore.ts)
    // so we're grabbing a reference to it from the React context.
    const preferenceStore = usePreferences();

    return (
        // add a Material UI theme provider at the root of the app -
        <ThemeProvider theme={Themes[preferenceStore.preferredTheme]}>
            {/* this is where our actual components start*/}
            <MainView text="Hello from react-material-mobx-starter"/>
        </ThemeProvider>
    );
});

export default App;
