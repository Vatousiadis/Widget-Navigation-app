import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Tsanslate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
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
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
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
        </div>
    );
};