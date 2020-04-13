import * as React from 'react';
import {withStyles, WithStyles} from '@material-ui/styles';
import {Card, Switch, Theme, Typography} from '@material-ui/core';
import {observer} from "mobx-react";
import {usePreferences} from "../stores/PreferenceStore";

const styles = (t: Theme) => ({
    root: {
        height: "100%",
        width: "100%"
    },
    card: {
        backgroundColor: t.palette.primary.main
    }
});

export interface MainViewProps extends WithStyles<typeof styles> {
    text: string
}

const MainView = observer((p: MainViewProps) => {
    const {classes, text} = p;
    const preferences = usePreferences();
    const nextTheme = preferences.preferredTheme === "blue" ? "red" : "blue";
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <Typography>{text}</Typography>
                <Switch onChange={() => preferences.setPreferredTheme(nextTheme)} />
            </Card>
        </div>
    )
});

export default withStyles(styles)(MainView);