/************************************************************************************
Crear una clase Persona, con nombre, edad y método beber bebida.

Crear una clase Bebida con propiedades Alcohólica, llena.

Crear 2 instancias, una persona mayor de edad y otra no nombre que quieran.

Si la persona mayor de edad intenta beber una bebida alcohólica debe entregar un mensaje de que la bebida fue bebida (propiedad llena false).

Si la persona menor de edad intenta beber una bebida alcohólica debe entregar un mensaje de error y la bebida debe seguir llena!

Si la persona menor de edad intenta beber una bebida NO alcohólica, entregar mensaje de éxito y cambiar propiedad de llena.

el método debe ser concatenable (devolver this)

La bebida debe tener un máximo de  10 sorbos.

Si los sorbos llegan a 0, entregar mensaje indicando que la bebida está vacía.

Agregar propiedad de ebriedad a persona. Cada vez que beba un sorbo de una bebida alcohólica la ebriedad debe aumentar.

Si la ebriedad llega a más de 15, indicar que la persona se encuentra ebria.

Si la ebriedad llega a 25, la persona ya no podrá beber más bebidas alcohólicas.

Cualquier persona puede beber un máximo de 30 sorbos de lo que sea.
*******************************************************************************/

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.sorbos = 0;
  this.ebriedad = 0;

  this.mayorDeEdad = function() {return this.edad >= 18 ? true : false};

  this.estoyEbrio = function() {return this.ebriedad > 15 ? true : false};

  this.puedoMasAlcohol = function() {return this.ebriedad >= 25 ? false : true};

  this.estoyFull = function () {return this.sorbos > 30 ? true : false};

  this.beber = function(bebida) {
    if (this.estoyFull() || !bebida.estoyLlena()) {
      console.log("Ya NO puedes beber nada mas");
    } else {
      if (bebida.esAlcoholica()) {
        if (this.puedoMasAlcohol()) {
          if (this.mayorDeEdad()) {
            var msg = "";
            bebida.serBebida();
            this.ebriedad ++;
            this.sorbos ++;
            this.estoyEbrio() ? msg = "Estas ebrio" : msg = (15 - this.ebriedad) +" sorbos estaras ebrio";
            console.log("beber con precaución, le quedan " + bebida.cuantoQueda() + " sorbos a la bebida y en "+ msg);
          } else {
            console.log("ERROR: no esta autorizado a beber bebidas alcholicas");
          }
        } else {
          console.log("NO puedes beber mas alcohol, estas muy ebrio");
        }
      } else {
        if (this.mayorDeEdad()) {
          console.log("me hace mal, solo alcholol para la otra, por favor");
          this.sorbos ++;
          bebida.serBebida();
        } else {
          console.log("Bien por beber bebidas no alcholicas");
          this.sorbos ++;
          bebida.serBebida();
        }
      }
    }
    return this;
  }
}

function Bebida(alcoholica) {
  this.alcoholica = alcoholica;
  this.llena = true;
  this.sorbos = 10;

  this.estoyLlena = function () {return this.llena};

  this.cuantoQueda = function () {return this.sorbos};

  this.esAlcoholica = function() {return this.alcoholica};

  this.serBebida = function() {
    this.sorbos--;
    if (this.sorbos == 0) {
      this.llena = false;
      console.log("Se acabo la bebida");
    }
  }
}

var juan = new Persona("Juan", 21);
var pedro = new Persona("pedro", 17);

var cerveza = new Bebida(true);
var ron = new Bebida(true);
var agua = new Bebida(false);
