import React, { useContext, useState } from 'react'
import {
    Navbar,
    Typography,
    Button,
    Input,
  } from "@material-tailwind/react";
import { StoreContext } from '../Store';

const Header = () => {
  const {fullValue, filteredValue} = useContext(StoreContext)
  const {setFilteredObjects} = filteredValue;
  const {state} = fullValue;
  const [searchTerm, setSearchTerm] = useState('');
  
  // Function for search employee with name
  const handleSearch = () => {
    if (searchTerm === "") {
      setFilteredObjects([]); // Clear the filtered objects
      return;
    }
    const filteredObjects = state.filter((obj) =>
      obj.first_name && obj.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredObjects(filteredObjects); 
    if (filteredObjects.length<1){
      window.alert("No search result found !")
    }
  };
 
  return (
    <Navbar
     className="mx-auto max-w-screen-xl px-4 py-3 mt-5 mb-8 shadow-2xl">
    <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
      <Typography
        as="a"
        href="#"
        variant="h5"
        className="mx-auto cursor-pointer py-1.5 text-light-blue-700 animate-zoom-in-out"
        style={{
          animationDuration: '10s',
          animationIterationCount: 'infinite',
          animationName: 'zoom-in-out', 
        }}
      >
        GREENDZINE TECHNOLOGIES
      </Typography>
      <div className="relative flex w-full gap-2 md:w-max">
        <Input
          type="search"
          label="By Name..."
          className="pr-20"
          containerProps={{
            className: "min-w-[288px]",
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button size="sm" className="!absolute right-1 top-1 rounded"
        onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  </Navbar>
  )
}

export default Header