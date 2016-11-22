const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los 0";
const VALORES = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
var App = React.createClass({ getInitialState: function () {
        return {
            turno: JUGADORX,
            valores: VALORES
        };
},
render: function () {
	var texto = "Turno del " + this.state.turno;
	var htmltablero = [];
	for (var i = 0; i < this.state.valores.length; i++) {
		//this.state.valores[i] contiene el array de la fila
		var htmlfila = [];
		for (var a = 0; a < this.state.valores[i].length; a++) {
        	//this.state.valores[i][a] contiene la casilla
			htmlfila.push(<span>{this.state.valores[i][a]}</span>); 
		}
		htmltablero.push(<div>{htmlfila}</div>); 
	}
	return (
       	<div>
       		<header class="cabecera">
    			{texto}
			</header>
			{htmltablero} 
		</div>	
	) 
}
});

module.exports = App;