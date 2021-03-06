import React from 'react';
import 'bulma/css/bulma.css';

const FormField = props => {
    return (
        <div className='field'>
            <label className='label'>{props.label}</label>
            <div className="control">
                <input className="input" type="email" placeholder={props.placeholder} />
            </div>
        </div>
    );
};

export default FormField