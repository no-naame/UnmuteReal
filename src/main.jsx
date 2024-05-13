import React, {createContext, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "@/header.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "@/body.jsx";
import { ThemeProvider } from "@/components/theme-provider";
import AboutUs from "./aboutUs";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import "firebase/auth";
import { auth } from "/firebase/firebaseConfig.jsx";
import WhyUnmute from "./aboutUs";
import axios from "axios";
import Error from "@/error.jsx";

const FocusContext = React.createContext({});
const UserContext = React.createContext({});
const UsersArrayContext = React.createContext({});
const ConnectContext = React.createContext({});

const ListContext = createContext({});
import MeetingComponent from "@/components/meetingComponent.jsx";
const AppLayout = () => {
  const [listOfInterests, setListOfInterests] = useState([]);
  const [user, setUser] = useState(null);
  const [isFocused, setFocused] = useState(false);
  const [nearbyUsers, setNearbyUsers] = useState([]);
  const [UserArr,setUserArr] = useState([])
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log(result.user)
      localStorage.setItem("user", JSON.stringify(result.user));
    } catch (error) {
      console.error("Sign in error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("user");
      console.log("Signed out successfully");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };
  const connectNearby = async (uid,latitude, longitude, message) => {
    console.log(uid, latitude, longitude, message);
    try {
      if (!user) return;
      // console.log(user.accessToken)
      const response = await axios.post(
          "http://127.0.0.1:5000/connect",
          {
            accessToken: user.stsTokenManager.accessToken,
            uid,
            latitude,
            longitude,
            message,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
      );

    } catch (error) {
      console.error("Error getting nearby users:", error);
    }
  };

  const getNearby = async (latitude, longitude, interests) => {
    try {
      if (!user) return;
      // console.log(user.accessToken)
      const response = await axios.post(
          "http://127.0.0.1:5000/query_locations",
          {
            accessToken: user.stsTokenManager.accessToken,
            latitude,
            longitude,
            interests,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
      );
      const nearby = response.data.results.map((i) => ({
        geocode: [i.latitude, i.longitude],
        interests: i.interests,
      }));

      console.log(response.data.results[0].uid)
      setNearbyUsers(nearby);
      setUserArr(response.data.results)
    } catch (error) {
      console.error("Error getting nearby users:", error);
    }
  };

  return (
      <ThemeProvider defaultTheme={"dark"} storageKey={"vite-ui-theme"}>
        <UserContext.Provider value={{ user, getNearby, nearbyUsers }}>
          <FocusContext.Provider value={{ isFocused, setFocused }}>
            <UsersArrayContext.Provider value={{UserArr}}>
              <ConnectContext.Provider value={connectNearby}>
                <ListContext.Provider value={{listOfInterests,setListOfInterests}}>
            <div
                className={" app h-screen"}
                onClick={() => {
                  setFocused(false);
                  console.log(isFocused);
                }}
            >
              <Header user={user} handleGoogle={handleGoogle} signOut={handleSignOut} />
              {user === null ? <WhyUnmute /> : <Outlet />}
            </div>
                </ListContext.Provider>
              </ConnectContext.Provider>
            </UsersArrayContext.Provider>
          </FocusContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
  );
};

export { FocusContext, UserContext, UsersArrayContext,ConnectContext,ListContext };

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/meet",
        element: <MeetingComponent />,
      },
    ],
    // errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);