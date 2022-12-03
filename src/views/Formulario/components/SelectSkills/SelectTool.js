import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { ToolOption } from './SelectSkillData';


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
                defaultValue = { [ ToolOption[0] ] }
                isMulti
                options = { ToolOption }
                onChange = { handleSelectChanges }
            />
        </div>
    )
}
