import React from 'react';
import {ThemeProvider} from "@material-ui/styles";
import {usePreferences} from "./stores/PreferenceStore";
import Themes from "./themes/Themes";
import MainView from "./components/MainView";
import {observer} from "mobx-react";

const App = observer(() => {

    const preferenceStore = usePreferences();

    return (
        <ThemeProvider theme={Themes[preferenceStore.preferredTheme]}>
            <MainView text="Hello from react-material-mobx-starter"/>
        </ThemeProvider>
    );
});

export default App;
