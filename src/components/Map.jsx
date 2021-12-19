import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import "./map.scss";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat: 49.58981417586986,
        lng: 34.55106041504197,
      },
    };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    this.setState({ address });
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);

        // update center state
        this.setState({ mapCenter: latLng });
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
      <div className="map">
        <h2 className="map-tittle">Where your finde us?</h2>
        <div className="map-container">
          <div className="google-maps" id="googleMaps">
            <PlacesAutocomplete
              value={this.state.address}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
              // style={{ width: "50%" }}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div className="input">
                  <input
                    {...getInputProps({
                      placeholder: "Search and go to places",
                      className: "input-location-search",
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion, index) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item--active";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "gray", cursor: "pointer" }
                        : { backgroundColor: "gray", cursor: "pointer" };
                      return (
                        <div
                          key={"suggestion-" + index}
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            {/* <div className="map-canv"> */}
            <Map
              className="test"
              google={this.props.google}
              style={{ width: "98.7%" }}
              initialCenter={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng,
              }}
              center={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng,
              }}
            >
              <Marker
                position={{
                  lat: this.state.mapCenter.lat,
                  lng: this.state.mapCenter.lng,
                }}
              />
            </Map>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD0SCgDVXCFf9Zfy3NE3yY4iK9Lxus_LvQ",
})(MapContainer);
