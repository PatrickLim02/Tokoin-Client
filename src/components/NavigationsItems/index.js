
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
const NavigationsItems = (props) => {
    const { navigationsData } = props;
    return (
        <div>
            <ul className="display-flex">
                {navigationsData?.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.url}>{item.label}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default NavigationsItems;
