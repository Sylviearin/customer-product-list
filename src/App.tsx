import React from 'react';
import {PublicRouter} from "./routes/PublicRouter";

// global styles import
import './assets/css/main.scss';

//Package CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
      <div className="app">
        <PublicRouter />
      </div>
  )
}

export default App;
