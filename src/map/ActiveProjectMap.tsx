
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

import kenyaCounties from  "../assets/topcountries.json"
import { useState } from "react";



export default function ActiveProjectMap() {
    const [selectedCounty, setSelectedCounty] = useState<string | null>(null);
    return (
        <>
        {selectedCounty}
        <ComposableMap>
            <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 3000, center: [37.9062, 0.0236] }}
        width={800}
        height={400}
      >
        <Geographies geography={kenyaCounties}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() =>
                  setSelectedCounty(geo.properties?.COUNTY_NAM)
                }
                style={{
                  default: {
                    fill: geo.properties?.SELECTED ? '#008036' : '#FFFFFF',
                    stroke: geo.properties?.SELECTED ? '#008036' : '#000000',
                    strokeWidth: geo.properties?.SELECTED ? 0 :0.75,
                    outline: 'none',
                    transition: 'fill 0.3s ease',
                  },
                  hover: {
                    fill: '#A3D9A5',
                    outline: 'none',
                    cursor: 'pointer',
                    transition: 'fill 0.2s ease',
                  },
                  pressed: {
                    fill: '#69B578',
                    outline: 'none',
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      
     </ComposableMap>
        </>
    )

}
