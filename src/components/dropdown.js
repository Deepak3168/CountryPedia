import React from 'react'; // Only import React

const Dropdown = ({ list, selectedValue, handleSelection , name}) => {
  return (
    <select
      className="outline-solid focus:outline-none p-4 m-4 bg-[#5fb7cf] rounded-md   border-b border-[#5a79c8] font-bold "
      value={selectedValue} // Bind value to the selectedValue prop
      onChange={(e) => handleSelection(e.target.value)} // Call onChange prop when value changes
    >
      <option value="" disabled>Select  {name}</option>
      {list.map(item => <option value={item.name} key={item.id}>{item.name}</option>)}
    </select>
  );
};

export default Dropdown;
