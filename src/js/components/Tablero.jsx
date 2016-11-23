var React = require('react');
var ReactDOM = require('react-dom');

const Casilla = require("./Casilla.jsx");

var Tablero = React.createClass ({
	/*tableroClick: function (numeroFila, numeroColuma) {
		this.props.manejadorTableroClick(numeroFila, numeroColuma);
	},
	tableroReinicio: function (numeroFila,numeroColuma) {
		this.props.manejadorTableroReinicio(numeroFila,numeroColuma);
	},*/
	render: function () {
		let tablero = this.props.valores.map(function(valoresFila, indiceFila){
			let fila = valoresFila.map(function(valor, indiceColumna){
				let mykey = ""+indiceFila+indiceColumna;
				return(<Casilla ganador={this.props.ganador} valor={valor} indiceFila={indiceFila} indiceColumna={indiceColumna} key={mykey} manejadorClick={this.tableroClick} />)
			}.bind(this));
			return (<div key={"fila"+indiceFila}>{fila}</div>)
		}.bind(this));
		return (<div>{tablero}</div>);
	}
});

module.exports = Tablero;