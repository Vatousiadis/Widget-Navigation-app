import React, { useState } from 'react';
import './darkmode.css';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index)
    };


    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={item.title}>
                <div 
                    className={`title ${active} dark-mode`} 
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}

                </div>
                <div className={`content ${active} dark-mode`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
    return (
        <div className="ui styled accordion dark-mode">
            {renderedItems}
        </div>
    );
};

export default Accordion;