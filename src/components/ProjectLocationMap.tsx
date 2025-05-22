import GoogleMapReact from 'google-map-react';

interface AnyReactComponentProps {
    text: string;
}
const AnyReactComponent = ({ text } : AnyReactComponentProps) => <div>{text}</div>;

export default function ProjectLocationMap() {
    const defaultProps = {
        center: {
          lat: -1.2848354,
          lng: 36.8234219
        },
        zoom: 16
      };
  return (
    <div className='rounded-3xl' style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          text="Carbon Project"
        />
      </GoogleMapReact>
    </div>
  )
}