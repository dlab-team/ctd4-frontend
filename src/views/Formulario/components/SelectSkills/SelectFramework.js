import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { FrameworkOption } from './SelectSkillData';


const animatedComponents = makeAnimated ();

export default function SelectLanguages() {

    const handleSelectChanges = ( { event }) => {
        console.log(event);
    }
    return (
        <div className="Skill-container">
            <Select
                closeMenuOnSelect = { false }
                components = { animatedComponents }
                defaultValue = { [ FrameworkOption[0] ] }
                isMulti
                options = { FrameworkOption }
                onChange = { handleSelectChanges }
            />
        </div>
    )
}
