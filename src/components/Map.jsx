import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export default withScriptjs(withGoogleMap(({lat, lng}) => {
    return (
        <GoogleMap
            defaultZoom={16}
            defaultCenter={{ lat, lng }}
        >
            <div style={{height: '5px '}}>
            <Marker 
                position={{ lat, lng }} 
            />
            </div>
        </GoogleMap>
    )
}))
