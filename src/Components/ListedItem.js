import React, { useContext, useEffect } from "react";
import { Card, CardHeader, Button, List, ListItem } from "@material-tailwind/react";
import axios from "axios";
import { StoreContext } from "../Store";

const ListedItem = () => {
  const { fullValue, filteredValue } = useContext(StoreContext);
  const { filteredObjects, setFilteredObjects } = filteredValue;
  const { state, setState } = fullValue;

  useEffect(() => {
    // Function for fetch employees datas
    const fetchData = async () => {
      try {
        const Data = await axios.get("https://reqres.in/api/users?page=2");
        setFilteredObjects([]);
        setState(Data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setState, setFilteredObjects]);

  //Function for clear search result
  const clearSearch = () => {
    setFilteredObjects([]);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {filteredObjects.length > 0 && (
        <div className="w-screen flex justify-center">
          {" "}
          <Button
            size="sm"
            className="rounded-full h-10 flex items-center justify-center"
            onClick={clearSearch}
          >
            Clear Search
          </Button>
        </div>
      )}
      <List>
      {filteredObjects.length > 0
        ? filteredObjects.map((employee) => (
            <ListItem className="relative m-7  hover:scale-110 w-80" key={employee.id}>
              <div className="h-80 w-80 text-center">
                <Card className="mb-2 pb-5 pt-1 px-5 border-2 border-gray-700 rounded-3xl">
                  <CardHeader
                    floated={false}
                    className="h-60 mx-auto bg-transparent shadow-none"
                  >
                    <img
                      src={employee.avatar}
                      className="h-60 border-gray-800 rounded-3xl"
                      alt=""
                    />
                  </CardHeader>
                </Card>
                <span className="text-lg text-gray-800">
                  {employee.first_name}
                </span>
              </div>
              <div className="bg-black text-white rounded-full w-11 h-11 flex items-center justify-center absolute top-[-10px] right-[-10px]">
                {employee.id}
              </div>
            </ListItem>
          ))
        : state.length > 0
        ? state.map((employee) => (
            <ListItem className="relative m-7  hover:scale-110 w-96" key={employee.id}>
              <div className="h-80 w-96 text-center">
                <Card className="mb-2 pb-5 pt-1 px-5 border-2 border-gray-700 rounded-3xl">
                  <CardHeader
                    floated={false}
                    className="h-60 mx-auto bg-transparent shadow-none"
                  >
                    <img
                      src={employee.avatar}
                      className="h-60 border-gray-800 rounded-3xl"
                      alt=""
                    />
                  </CardHeader>
                </Card>
                <span className="text-lg text-gray-800">
                  {employee.first_name}
                </span>
              </div>
              <div className="bg-black text-white rounded-full w-11 h-11 flex items-center justify-center absolute top-[-10px] right-[-10px]">
                {employee.id}
              </div>
            </ListItem>
            
          ))
        : ""}
        </List>
    </div> 
  );
};

export default ListedItem; 
