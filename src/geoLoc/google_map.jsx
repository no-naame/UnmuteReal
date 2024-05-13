import React from 'react';
import './App.css';

const API_endpoint = 'https://api.openweathermap.org/data/3.0/onecall?'
const API_key = 

function App() {
    const [lat, setLat] = React.useState('');
    const [long, setLong] = React.useState('');
    React.useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);

        })
    }, [])
    return (
        <div className='App'>

        </div>
    )
}