import React from 'react'
import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom, children }) => (
  <div style={{ width: "100%", height: "100%" }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBRN27NQ3KupVQEkCZhCVm4kqJPlE7R4YQ' }}
      center={center}
      zoom={zoom}
      draggable={false}
    >
      {children}
    </GoogleMapReact>
  </div>
)

export default Map
