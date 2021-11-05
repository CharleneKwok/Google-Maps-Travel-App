import React, {useState, useEffect} from "react";
import { CssBaseline, Grid } from "@material-ui/core";
// normalising the styles
import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";;

const App = () => {
    // hotels...
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
            setCoordinates({ lat: latitude, lng: longitude });
        });
    },[]);

    // rerender every time the map changes 
    useEffect(() => {
        console.log(coordinates, bounds);
        // render before actually get bounds
        // have to check bounds is not null
        if (bounds) {
            getPlacesData(bounds.sw, bounds.ne)
                .then((data) => {
                    setPlaces(data);
                });
        }
    },[coordinates, bounds]);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    {/* 
                        xs => full width on mobile devices
                        md => medium device only 
                    */}
                    <List places={places}/>
                </Grid>
                <Grid item xs={12} md={8} style={{marginTop:'50px'}}>
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;