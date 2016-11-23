var React = require('react');
var ReactDOM = require('react-dom');
var TresEnRayaStore = require('../stores/TresEnRayaStores');

const Cabecera = require("./Cabecera.jsx");
const Tablero = require("./Tablero.jsx");
const BotonReinicio = require("./BotonReinicio.jsx");

function getAppStateFromStore() {
	return {
		turno: TresEnRayaStore.getTurno(),
		valores: TresEnRayaStore.getValores(),
		ganador: TresEnRayaStore.getGanador(),
		empate: TresEnRayaStore.getEmpate(),
		moves: TresEnRayaStore.getMoves()
	};
}


var App = React.createClass({
	getInitialState: function () {
		return getAppStateFromStore();
	},
	componentDidMount() {
		TresEnRayaStore.addChangeListener(this._onChange);
	},
	componentWillUnmount() {
 		TresEnRayaStore.removeChangeListener(this._onChange);
 	},
	_onChange: function() {
 		this.setState(getAppStateFromStore());
 		if(getAppStateFromStore().ganador === true){
			alert("Ha ganado el " + this.state.turno); 			
 		}
 		else if(getAppStateFromStore().empate === true){
 			alert("¡EMPATE!");
 		}

 	},

	render: function () {
		var texto = "Turno del " + this.state.turno;
		return (
		<div>
			<Cabecera texto={texto}/>
			<Tablero valores={this.state.valores} ganador={this.state.ganador}/>
			<BotonReinicio />
			<div>Número de movimientos : {this.state.moves}</div>
		</div>
		)
	}
});

module.exports = App;