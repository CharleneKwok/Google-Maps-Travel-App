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
        console.log("2");
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
            setCoordinates({lat:latitude, lng:longitude});
        });
    },[]);

    useEffect(() => {
        getPlacesData()
            .then((data) => {
                console.log(data);
                setPlaces(data);
            });
    },[]);

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
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;