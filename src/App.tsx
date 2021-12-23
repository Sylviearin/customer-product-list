import React from 'react';
import {PublicRouter} from "./routes/PublicRouter";

// styles import
import './assets/css/main.scss';
import {ThemeProvider} from "@mui/material";
import {mainTheme} from "./themes/mainTheme";

const App: React.FC = () => {

    return (
        <ThemeProvider theme={mainTheme}>
            <PublicRouter/>
        </ThemeProvider>
    )
}

export default App;
