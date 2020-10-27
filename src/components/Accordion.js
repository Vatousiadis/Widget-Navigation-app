import React, { useState } from 'react';
import './darkmode.css';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        if (index === activeIndex) setActiveIndex(-1); else setActiveIndex(index)
    };


    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={item.title}>
                <div
                    className={` dropdown-label title ${active} `}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon dropdown-label"></i>
                    {item.title}

                </div>
                <div className={`content ${active} `}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
    return (
        <div className="ui styled accordion ">
            {renderedItems}
        </div>
    );
};

export default Accordion;