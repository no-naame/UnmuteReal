import React, { createContext, useContext, useState, useEffect } from "react";
import SearchBar from "@/searchBar.jsx";
import {FocusContext, ListContext, UserContext} from "./main.jsx";
import Interest from "@/interest.jsx";
import SimpleMap from "@/map.jsx";
import {Link} from "react-router-dom";
import CustomButton from "../CustomButton.jsx";
const Body = () => {const { isFocused, setFocused } = useContext(FocusContext);
// const [listOfInterests, setListOfInterests] = useState([]);
const {listOfInterests,setListOfInterests} = useContext(ListContext)
const { getNearby, nearbyUsers } = useContext(UserContext);
  return (
      <div
          className={"h-full"}
          onClick={() => {
            setFocused(false);
            console.log(false);
          }}
      >
        <Interest
            listOfInterests={listOfInterests}
            setListOfInterests={setListOfInterests}
        />
        <SearchBar
            listOfInterests={listOfInterests}
            setListOfInterests={setListOfInterests}
        />
          <div className="flex gap-12">
              <SimpleMap markers={nearbyUsers}/>
              <Link to="/meet">{<CustomButton/>}</Link>

          </div>
          <div className="w-50 my-24 h-72 bg-footer justify-center flex flex-col mt-52">
              <div className="text-center py-4 text-7xl">Contact Us</div>
              <div className="text-center py-8 text-4xl">
                  Email : unmute@gmail.com
              </div>
          </div>
      </div>
  );
};
export default Body;
