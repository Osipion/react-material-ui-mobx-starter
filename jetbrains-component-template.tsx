// this template can be add to file templates within the jetbrains IDEs (webstorm, intellij, goland, rubymine, clion etc)
// by copy and paste. It creates a basic functional component that is styled with material ui styles and observes mobx
// changes.

import * as React from 'react';
import {withStyles, WithStyles} from '@material-ui/styles';
import {Theme} from '@material-ui/core';
import {observer} from "mobx-react";

// the styles that can be applied to ${NAME}
const styles = (t: Theme) => ({
    // the root (backing) element
    root: {
        height: "100%",
        width: "100%"
    }
});

// additional properties for ${NAME}
export interface ${NAME}Props extends WithStyles<typeof styles> {

}

// the ${NAME} functional component that observes mobx
const ${NAME} = observer((p: ${NAME}Props) => {
    const {classes} = p;
    return (
        <div className={classes.root}>
        </div>
    )
});

// the ${NAME} functional component with styles attached.
export default withStyles(styles)($NAME);