import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        if (debouncedTerm) {
            const search = async () => {
                const { data } = await axios.get('http://en.wikipedia.org/w/api.php', {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: debouncedTerm,
                    },
                });
                setResults(data.query.search);
            };
            search();
        }
    }, [debouncedTerm]);

    const renderedResults = results.map((results) => {
        return (
            <div key={results.pageid} className="item dark-mode">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${results.pageid}`}
                    >
                        Link
                        </a>
                </div>
                <div className="content">
                    <div className="header">
                        {results.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: results.snippet }}></span>
                </div>
            </div>
        );
    });


    return (
        <div>
            <div className="ui form dark-mode">
                <div className='field'>
                    <label>Enter Search Topic</label>
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
            {!debouncedTerm ?

                <div className="ui active centered inline loader"></div>
                : <></>}




        </div>

    );
};

export default Search;