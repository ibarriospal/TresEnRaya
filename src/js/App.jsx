var React = require('react');
var ReactDOM = require('react-dom');

const Cabecera = require("./Cabecera.jsx");
const Tablero = require("./Tablero.jsx");
const BotonReinicio = require("./BotonReinicio.jsx");

const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los 0";
const VALORES = [['-','-','-'],['-','-','-'],['-','-','-']];

function checkWinner (values, nuevoValor) {
	//Compruebo filas
	var contador = 0;
	for (var x = 0; x < values.length; x++) {
		for (var y = 0; y < values[x].length; y++) {
			if(values[x][y] === nuevoValor){
				contador++;

			} else {
				contador = 0;
			}
		}
		if(contador === values.length) {
			console.log("fila");
			return true;}
	}
	contador = 0;
	x=0;
	y=0;
	
	//Compruebo columnas
	for (var j = 0; j < values[0].length; j++) {
		for (var i = 0; i < values.length; i++) {
			if(values[i][j] === nuevoValor){
				contador++;
			} else {
				contador = 0;
			}
		}
		if(contador === values.length) {
			console.log("columna");
			return true;}
	}
	contador = 0;
	i=0;
	j=0;
	//Compruebo diagonal
	for (var xy = 0; xy < values.length; xy++) {
			if(values[xy][xy] === nuevoValor){
				contador++;
				if(contador === 3) {
					console.log("diagonal");
					return true;}
			} else {
				contador=0;
			}
	}
	contador = 0;
	xy=0;
	//Compruebo diagonal opuesta
	for (var yx = 0; yx < values.length; yx++) {
			if(values[yx][values.length - yx -1] === nuevoValor){
				contador++;
				if(contador === values.length) {
					console.log("antidiagonal")
					return true;}
			} else {
				contador=0;
			}
	}
	contador=0;
	yx=0;
	
	return false;
}

function checkEmpate (values) {
	var contador = 0;
	for (var x = 0; x < values.length; x++) {
		for (var y = 0; y < values[x].length; y++) {
			if(values[x][y] !== '-'){
				contador++;
			} else {
				contador = 0;
			}
		}
	}
	if(contador === (values.length*values.length)) {return true;}

	return false;
}


var App = React.createClass({
	getInitialState: function () {
		return {
			turno: JUGADORX,
			valores: VALORES,
			ganador: false,
			empate: false,
			reiniciar: true,
			moves: 0
		};
	},
	reiniciarJuego: function () {
		this.setState(this.getInitialState());	
	},
	appReinicio:function(numeroFila, numeroColumna) {
		let valores = this.state.valores;
		valores[numeroFila][numeroColumna] = '-';
		let ganador = this.state.ganador;
		let empate = this.state.empate;
		let moves = 0;
	},
	appClick: function (numeroFila, numeroColumna) {
		let valores = this.state.valores;
		let nuevoValor = this.state.turno === JUGADORX ? 'X' : '0';
		valores[numeroFila][numeroColumna] = nuevoValor;
		let ganador = this.state.ganador;
		let empate = this.state.empate;
		let moves = this.state.moves++;
		this.setState({
			turno: this.state.turno === JUGADORX ? JUGADOR0 : JUGADORX,
			valores: this.state.valores,
			ganador: this.state.ganador,
			empate: this.state.empate,
			reiniciar: false,
			moves: this.state.moves
		});
		if(checkWinner(this.state.valores, nuevoValor)){
			ganador = true;
			alert("Ha ganado el " + this.state.turno);

		}
		else if(checkEmpate(this.state.valores)){ 
			empate = true;
			alert("¡EMPATE!");
		}
		this.setState({
			turno: this.state.turno === JUGADORX ? JUGADOR0 : JUGADORX,
			valores: this.state.valores,
			ganador: ganador,
			empate: empate,
			reiniciar: false,
			moves: this.state.moves
		});
	},
	render: function () {
		var texto = "Turno del " + this.state.turno;
		return (
		<div>
			<Cabecera texto={texto}/>
			<Tablero valores={this.state.valores} ganador={this.state.ganador} reiniciar={this.state.reiniciar} manejadorTableroClick={this.appClick} manejadorTableroReinicio={this.appReinicio} />
			<BotonReinicio manejadorReinicioJuego={this.reiniciarJuego} />
			<div>Número de movimientos : {this.state.moves}</div>
		</div>
		)
	}
});

module.exports = App;