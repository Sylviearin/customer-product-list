import React from 'react';
import {PublicRouter} from "./routes/PublicRouter";

// styles import
import './assets/css/main.scss';

const App: React.FC = () => {

    return (
        <div className="app">
            <PublicRouter/>
        </div>
    )
}

export default App;
