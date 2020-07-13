var nome = 'Luiz Carlos';
function minhaFunc(x, y) {
    return x + y;
}
var numero = 27;
var pi = 3.64;
var numeros = [1, 2, 3];
numeros.map(function (item) { return item * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
