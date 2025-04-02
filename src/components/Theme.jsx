import React, { useState, useEffect } from 'react';
import './Theme.css';

function Theme() {

    const [Mode, setMode] = useState(false);

    const toggleTheme = () => {
        setMode(!Mode);
    };


    useEffect(() => {
        
        if (Mode) {
          document.body.classList.add('dark');
          document.body.classList.remove('light');
        } else {
          document.body.classList.add('light');
          document.body.classList.remove('dark');
        }
      }, [Mode]);


    return (

        <div className={Mode ? 'dark' : 'light'}>
            <div className="Theme">
                <h1>{Mode ? 'Mode Sombre' : 'Mode Clair'}</h1>
                <button onClick={toggleTheme}>
                    Passer en {Mode ? 'Clair' : 'Sombre'}
                </button>
            </div>
        </div>
    );
}

export default Theme