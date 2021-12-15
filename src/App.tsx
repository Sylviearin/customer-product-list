import React from 'react';
import {PublicRouter} from "./routes/PublicRouter";

// styles import
import './assets/css/main.scss';
import {ThemeProvider} from "@mui/material";
import {mainTheme} from "./themes/mainTheme";

const App: React.FC = () => {

    return (
        <div className="app">
            <ThemeProvider theme={mainTheme}>
                <PublicRouter/>
            </ThemeProvider>
        </div>
    )
}

export default App;
