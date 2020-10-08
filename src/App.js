import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Tsanslate';
import Route from './components/Route';
import Header from './components/Header';
import useDarkMode from './hooks/useDarkmode';
import './components/darkmode.css';

const items = [
    {
        id: 'title',
        title: 'Favourite color?',
        content: 'Purple'
    },
    {
        title: 'Favourite pet?',
        content: 'Dog'
    },
    {
        title: 'Favourite food?',
        content: 'Pizza'
    }
]

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    }
];

export default () => {

    const [darkMode, setDarkMode] = useDarkMode();
    const onChangeDarkMode = () => {
        darkMode ? setDarkMode(false) : setDarkMode(true)
    };



    const [selected, setSelected] = useState(options[0])
    return (
        <div className="content">
            <div>
                <div className="content dropwdown">
                <i class="sun icon sun" color="#00ffff"></i>
                <div className="ui toggle checkbox toggle ">
                    <input type="checkbox" name="public" value={darkMode} onChange={onChangeDarkMode} />
                    <label></label>
                </div>
                <i class="moon icon moon" color="#00ffff"></i>
                </div>
                <Header />
                <Route path="/"><Accordion items={items} /></Route>
                <Route path="/wikisearch"><Search /></Route>
                <Route path="/dropdown">
                    <Dropdown
                        label="Select a color"
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                    />
                    <p style={{ color: selected.value }}>This text is {selected.value}</p>
                </Route>
                <Route path="/translate"><Translate /></Route>
                <p></p>

            </div>
        </div>
    );
};