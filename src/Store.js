import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export function StoreProvider(props) {
  const [state, setState] = useState([]);
  const [filteredObjects, setFilteredObjects] = useState([]);

  const fullValue = { state, setState };
  const filteredValue = {filteredObjects, setFilteredObjects}


  return (
    <StoreContext.Provider value={{fullValue, filteredValue}}>
      {props.children}
    </StoreContext.Provider>
  );
}