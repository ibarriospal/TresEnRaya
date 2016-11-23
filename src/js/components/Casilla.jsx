import { Button } from 'react-bootstrap';

var TresEnRayaActions = require('../actions/TresEnRayaActions');
var React = require('react');
var ReactDOM = require('react-dom');

const casillaStyle = {
	height: '100px',
	width: '100px'
};

let Casilla = React.createClass({
	casillaClick: function () {
		if(this.props.valor === "-" && this.props.ganador !== true) {
			TresEnRayaActions.jugarPosicion(this.props.indiceFila, this.props.indiceColumna);
		}
	},
	getbsStyle: function () {
		if(this.props.valor === 'X'){
			return "success";
		} else if(this.props.valor === '0'){
			return "danger";
		} else {
			return "primary";
		}
	},
	getClassName: function () {
		return (this.props.ganador !== true &&  this.props.valor === "-") ? "clickable" : "no_clickable";

	},
	render: function () {
		return (
			<Button bsStyle={this.getbsStyle()} style={casillaStyle} className={this.getClassName()} onClick={this.casillaClick}>
			{this.props.valor} </Button>
		)
	}
});

module.exports = Casilla;