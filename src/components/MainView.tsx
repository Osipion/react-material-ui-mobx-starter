import * as React from 'react';
import {withStyles, WithStyles} from '@material-ui/styles';
import {Card, Switch, Theme, Typography} from '@material-ui/core';
import {observer} from "mobx-react";
import {usePreferences} from "../stores/PreferenceStore";

// The styles that can be applied to this component
const styles = (t: Theme) => ({
    root: {
        height: "100%",
        width: "100%"
    },
    card: {
        // we can access the values we set in the theme to determine the appropriate properties
        backgroundColor: t.palette.primary.main
    }
});

// The properties that can be passed to this component
export interface MainViewProps extends WithStyles<typeof styles> {
    text: string
}

// A functional component that observes mobx state
const MainView = observer((p: MainViewProps) => {
    // we can grab the styles actually supplied at runtime from our props, along with the text to display
    const {classes, text} = p;
    // we can also grab a reference to our mobx state
    const preferences = usePreferences();
    // since each mobx update should cause this component to re-render, we can just compute the next theme each time
    // as we only have 2
    const nextTheme = preferences.preferredTheme === "blue" ? "red" : "blue";
    return (
        <div className={classes.root}>
            {/*Use Material UI components with custom styles*/}
            <Card className={classes.card}>
                <Typography>{text}</Typography>
                {/*Modify mobx state*/}
                <Switch onChange={() => preferences.setPreferredTheme(nextTheme)} />
            </Card>
        </div>
    )
});

// export our styled component
export default withStyles(styles)(MainView);