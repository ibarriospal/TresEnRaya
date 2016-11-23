var React = require('react');
var ReactDOM = require('react-dom');

var Casilla = require("./Casilla.jsx");

var Tablero = React.createClass ({
	tableroClick: function (numeroFila, numeroColuma) {
		this.props.manejadorTableroClick(numeroFila, numeroColuma);
	},
	tableroReinicio: function (numeroFila,numeroColuma) {
		this.props.manejadorTableroReinicio(numeroFila,numeroColuma);
	},
	render: function () {
		let tablero = this.props.valores.map(function(valoresFila, indiceFila){
			let fila = valoresFila.map(function(valor, indiceColumna){
				let mykey = ""+indiceFila+indiceColumna;
				return(<Casilla ganador={this.props.ganador} reiniciar={this.props.reiniciar} valor={valor} indiceFila={indiceFila} indiceColumna={indiceColumna} key={mykey} manejadorClick={this.tableroClick} manejadorReinicio={this.tableroReinicio} />)
			}, this);
			return (<div key={"fila"+indiceFila}>{fila}</div>)
		}, this);
		return (<div>{tablero}</div>);
	}
});

module.exports = Tablero;