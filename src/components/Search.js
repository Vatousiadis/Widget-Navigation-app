import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './darkmode.css';

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
            <div key={results.pageid} className="item search ">
                <div className="right floated content search">
                    <a
                        className="ui button search"
                        href={`https://en.wikipedia.org?curid=${results.pageid} search`}
                    >
                        Link
                        </a>
                </div>
                <div className="content search">
                    <div className="header search">
                        {results.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: results.snippet }}></span>
                </div>
            </div>
        );
    });


    return (
        <div>
            <div className="ui form ">
                <div className='field '>
                    <label className='search'>Enter Search Topic</label>
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className=" input "
                    />
                </div>
            </div>
            <div className="ui celled list search">{renderedResults}</div>
            {!debouncedTerm ?
                <div className="ui active centered inline loader search"></div>
                : <></>}




        </div>

    );
};

export default Search;