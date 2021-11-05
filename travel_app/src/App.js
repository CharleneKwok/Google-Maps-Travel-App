import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
// normalising the styles
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";;

const App = () => {
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
                    <Map />
                </Grid>
            </Grid>
        </>
    );
}

export default App;