import React, { Component } from 'react';
import Jumbotron from './jumbotron/jumbotron.js';
import Navbar from './NavBar/Header.js';
import Produit from './Cards/Produits.js';
import Map from './Map/Map.js';
import Footer from './Footer/Footer.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Jumbotron />
				<Produit />
				<Map />
				<Footer />
			</div>
		);
	}
}

export default App;
