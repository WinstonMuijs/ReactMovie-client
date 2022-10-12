import React from 'react';
import * as ReactDOM from 'react-dom/client';

import './index.scss';

class MovieApplication extends React.Component{
    render() {
        return (
            <div className='flix'>
                <div>Good morning</div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementsByClassName('app-container')[0]);

root.render(
    <MovieApplication/>
)
