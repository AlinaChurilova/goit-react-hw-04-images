import React from 'react';
import { Oval } from 'react-loader-spinner'
import s from './Loader.module.css';

export default function Loader ()  {
    return (
            <div className={s.Loader}>
                <Oval
                    height="50"
                    width="50"
                    color='green'
                    ariaLabel='loading'
                />
                </div>
        )
}
