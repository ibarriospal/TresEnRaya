var React = require('react');
var ReactDOM = require('react-dom');

import { Button } from 'react-bootstrap';


let BotonReinicio = React.createClass({
	buttonClick: function(){
		this.props.manejadorReinicioJuego();
	},
	render: function(){
		return(
			<Button  bsSize = "large" id="reiniciarJuego" onMouseDown={this.buttonClick} onMouseUp={this.buttonClick}>
			Reiniciar Partida</Button>
			)
	}
});

module.exports = BotonReinicio;