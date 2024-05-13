import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from "/firebase/firebaseConfig";
import { useState, React } from "react";
const provider = new GoogleAuthProvider();
export default function Login(){
    const [user, setUser] = useState(null);
    const handleGoogle = async (e)=>{
        const provider = await new GoogleAuthProvider();
        const data = await signInWithPopup(auth, provider);
        console.log(data);
        setUser(data);
      return data;
    }
    const signOut = () => {
        setUser(null);
    }
    return (
        <>
            {/* /* <div className="pt-36 w-full flex">
                <button onClick={handleGoogle} className="mx-auto border-4 bg-green-500">
                    Sign in With Google
                </button>

            </div> */}
            

        </>
    )
}



// import React, { useState, useEffect } from 'react';
// Import necessary Firebase libraries
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "/firebase/firebaseConfig";

// const Login = ()/