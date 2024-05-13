// import React from 'react';
// import {Input} from "@/components/ui/input.jsx";
import data from "../src/assets/data.json";

import React, {useContext, useEffect, useState} from "react";
import { list } from "postcss";
import exp from "node:constants";
import { FocusContext, UserContext } from "./main.jsx";

const SearchBar = ({ listOfInterests, setListOfInterests }) => {
  // const [query, setQuery] = useState("");
  const [filterList, setFilterList] = useState([]);
  const items = data.keywords;
  const { isFocused, setFocused } = useContext(FocusContext);
  const { getNearby, nearbyUsers,user } = useContext(UserContext);
  // const [listOfInterests, setListOfInterests] = useState([]);
  // const {listOfInterests, setListOfInterests} = useContext(ListContext)
    useEffect(()=> {
        const  intervalID = setInterval(() => {
            if (listOfInterests.length <= 0) return;
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const latitude = pos.coords.latitude;
                    const longitude = pos.coords.longitude;
                    if (latitude === null || longitude === null) {
                        console.log("Error");
                        return;
                    }
                    console.log(latitude, longitude, listOfInterests)
                    getNearby(latitude, longitude, listOfInterests);
                },
                (e) => console.log(e)
            );
        }, 5000);


        return () => clearInterval(intervalID)
    }, [listOfInterests]);
  return (
    <div
      className="w-75 mx-auto overflow-y-auto rounded-lg p-4"
      onClick={(e) => {
        e.stopPropagation();
        setFocused(true);
      }}
    >
        <div className="w-full flex justify-center">
      <input
        type="search"
        className="w-[35rem] px-4 py-2 text-gray-700 bg-white border border-gray-300 mb-10 rounded-lg shadow-md mx-auto focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-md ring ring-gray-500 ring-opacity-5"

        placeholder="You are Just a Step Away from being Unmute....."
        onChange={(e) => {
          // setQuery(e.target.value);
            const query = e.target.value
          const searchFilter = items.filter((e) => {
            return e.toLowerCase().includes(query.toLowerCase().trim());
          });
          setFilterList(
            searchFilter.length < 5 ? searchFilter : searchFilter.slice(0, 5)
          );
        }}
      />
        </div>
        <div className="shadow-md ring ring-gray-500 ring-opacity-5">
      <ul className="mb-36">
        {isFocused &&
          filterList.map((e) => {
            return (
              <div
                className="bg-[#323241] hover:bg-black border-white mx-auto w-[35rem] text-center"
                onClick={() => {
                  {
                    listOfInterests.length < 5 &&
                      setListOfInterests((i) =>
                        i.reduce((accum, cur) => accum && cur !== e, true)
                          ? [...i, e]
                          : i
                      );
                  }


                }}
              >
                <li className="text-white py-2 text-lg">{e}</li>
              </div>
            );
          })}
      </ul>
        </div>
    </div>
  );
};
export default SearchBar;
