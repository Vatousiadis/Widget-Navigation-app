// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM    <----------API Key

import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import './darkmode.css';


const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Greek',
        value: 'el'
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Spanish',
        value: 'es'
    },
    {
        label: 'Russian',
        value: 'ru'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div className="translate">
            <div className="ui form">
                <div className="field">
                    <label className="translate">Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                label="Select a Language"
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
            />
            <hr />
            <h3 className="ui header translate">Translated Text</h3>
            <Convert  text={text} language={language} />
        </div>
    );
};

export default Translate;