// this template can be add to file templates within the jetbrains IDEs (webstorm, intellij, goland, rubymine, clion etc)
// by copy and paste. It creates a basic functional component that is styled with material ui styles and observes mobx
// changes.

import * as React from 'react';
import {withStyles, WithStyles} from '@material-ui/styles';
import {Theme} from '@material-ui/core';
import {observer} from "mobx-react";

const styles = (t: Theme) => ({
    root: {
        height: "100%",
        width: "100%"
    }
});

export interface ${NAME}Props extends WithStyles<typeof styles> {

}

const ${NAME} = observer((p: ${NAME}Props) => {
    const {classes} = p;
    return (
        <div className={classes.root}>
        </div>
    )
});

export default withStyles(styles)($NAME);