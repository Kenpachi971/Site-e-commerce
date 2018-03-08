import React, { Component } from 'react';
import './Map.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class laMap extends Component {
	state = {
		zoom: 12,
	};
	render() {
		return (
			<div className="App">
				<Map zoom={this.state.zoom}>
					<TileLayer
						attribution="&amp;copy <a href=&quot;https://osm.org/go/YzRsbhc--?m=&relation=3541540;>OpenStreetMap</a> contributors"
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker>
						<Popup>
							<span>
								ICI<br />
							</span>
						</Popup>
					</Marker>
				</Map>
			</div>
		);
	}
}

export default laMap;
