var React = require('react');
var ReactDOM = require('react-dom');

var TresEnRayaActions = require('../actions/TresEnRayaActions');

import { Button } from 'react-bootstrap';


let BotonReinicio = React.createClass({
	buttonClick: function(){
		TresEnRayaActions.reiniciarJuego();
	},
	render: function(){
		return(
			<Button  bsSize = "large" id="reiniciarJuego" onClick={this.buttonClick} >
			Reiniciar Partida</Button>
			)
	}
});

module.exports = BotonReinicio;