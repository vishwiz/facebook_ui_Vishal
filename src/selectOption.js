import React from 'react';

const SelectOption = (props)=>{
   return(

    <select defaultValue="All" onChange={props.onSelect}>
      <option value="None">None</option>
      <option value="Text">Text only</option>
      <option value="Image">Image Only</option>
      <option value="All">All</option>
    </select>
   )
}

export default SelectOption