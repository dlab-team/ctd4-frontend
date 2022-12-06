// import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
// import { LanguageOption } from './SelectSkillData';
import axios from 'axios';
import { useState, useEffect } from 'react';


const animatedComponents = makeAnimated ();

export default function SelectFramework() {

   
    useEffect(() => {

        axios
            .get(process.env.REACT_APP_BACKEND_URL + '/skills')

            .then((res) => {
                const datos = res.data;
                setSkills(datos);
            });
      }, []);

      const [skills, setSkills] = useState([]);

      const skillsOptions = 
        skills.slice(0,16).map((item) => {
            return (
           {label:item.name, value:item.id}
            );
        })
    
        console.log(skillsOptions)   

    return (
        <div className="Skill-container">
            <Select
                closeMenuOnSelect = { false }
                components = { animatedComponents }
                isMulti
                options = { skillsOptions }
                
                />
            
        </div>
    )
}

