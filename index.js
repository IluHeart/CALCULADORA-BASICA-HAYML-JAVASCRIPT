// Todo lo escrito apartir de ahora es copido de un video tutorial , para aprender

// const(CONSTANTE) X(NOMBRE A ELEGUIR) = document.getElementById("EL ID DEL ELEMENTO")

const Operador1 = document.getElementById("op1")
const Simbolo = document.getElementById("simbolo")
const Operador2 = document.getElementById("op2")
const CALCULAR = document.getElementById("calcular")
const Resultado = document.getElementById("resultado")

// HEMOS CREADO OBJETOS HTML CON CADA UNA DE LAS IDs QUE HEMOS CRADO CON ANTERIORIDAD PARA TENER CONTROL SOBRE ELLAS

// AHORA CREARE UN AVENTO PARA EL BOTON

CALCULAR.addEventListener("click", calcular)

// AHORA VAMOS A CREAR FUNCIONES QUE INTERACTUEN CON LOS ELEMENTOS

// LAS FUNCIONES SE CREAN DE LA SIGIENTE MANERA

// function X(NOMBRE DEL ELEMENTO CREADO) () Y LUEGO {} 

// COMENZARE CON LA FUNCION DEL BOTON "CALCULAR"

function calcular(){

// ESTA CONSTANTE ES PARA CONTROLAR UNICAMENTE EL VALOR O OTRAS PROPIEDADES DE LAS VARIABLES
    const Formula = Simbolo.value

// AÑADIMOS = PARSEFLOAT PARA QUE SOLO LEA NUMEROS ENTEROS Y DECIMALES

    const op1 = parseFloat(Operador1.value)
    const op2 = parseFloat(Operador2.value)
// ------------------
    if((Formula == "+" ||Formula == "-" ||Formula == "*" ||Formula == "/" )
    && !isNaN(op1) && !isNaN(op2)){
        let resultado
        switch (Formula){   
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2
                break     
        }
        Resultado.style = "color:black"
        Resultado.innerText = resultado
    }else{
        Resultado.style = "color:red"
        Resultado.innerText = "Eres tonto o k?"
    }
}
