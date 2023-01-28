function calcularMedia (notas) {

    let soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas [c];
    }

    media = soma / notas.length;

    return media;
}

let media ; //escopo global

function aprovacao (notas) {

    let media = calcularMedia (notas); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Media: ' + media + ' - Resultado: ' + condicao;
}

// Função Recursiva

function contagemRegressiva (numero);{

    console.log (numero);

    let proximoNumero = numero - 1;

    if (proximoNumero > 0)
        contagemRegressiva (proximoNumero);

}

// contagemRegressiva (50);

/*
 *Formulário envio de dados par cálculo de média
 */
const formulario1 = document.getElementById('formulario-01');

if('formulario1')
formulario1.addEventListener ('submit', function (evento)) {
    
    evento.proventDefault ();
    evento.stopPropagation ();

    let formulario = document.getElementById ('formulario - 01');

    let dados = new FormData (formulario);

    let objeto = {

    let notas = []

    for (let key of dados.keys ());
        objeto [key] = dados.get (key);

        //adicionar itens no array
        notas.push (parseInt (dados.get (key)))
    
    }
}

console.log (notas);

console.log (objetivo);

texto = aprovacao (notas)

document.getElementById ('resultado') . innerHTML = texto;

/*Formulário envio de dados par cálculo de média*/
document.getElementById('formulario-01').addEventListener('submit'), function(evento){
    evento.proventDefault();
    evento.stopPropagation();
    if(this.getAttribute(class).match(/erro)){
        return false;
    }
    let dados=newFormData(this);
    let notas=[];
    for(let key of dados.keys()){
        let numero=dados.get(key).match(/\d*/)?Number(dados.get(key)):0; //é um número
        if(!isNaN(numero)){
            notas.push(numero);
        }
    }

    console.log(notas);

    texto=aprovacao (notas);

    document.getElementById('resultado').innerHTML=texto;

};

for(let.emFoco of camposObrigatorios){
    validaCampo(emFoco);
}
   
function validaCampo(elemento){
    elemento.addEventListener('focusout', function (event){
        event.preventDefault();
        
        if(this.value==""){
            document.querySelector(.'mensagem').innerHTML="Verifique o preenchimento dos campos em vermelho"
            this.classList.add('erro');
            return false;
        }else{
            document.querySelector(.'mensagem').innerHTML="";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
    }
});

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault()

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/./,"") : this.value;

        if(numero != "" && numero.match(/[0-9]*/)) && numero >= 0 && numero <= 10){
        document.querySelector(.'mensagem').innerHTML="Verifique o preenchimento dos campos em destaque";
        this.classList.remove('erro'); 
        this.parentNode.classList.remove('erro');
        }else{
        document.querySelector(.'mensagem').innerHTML="Verifique o preenchimento dos campos em destaque";
        this.classList.add('erro');
        this.parentNode.classList.add('erro');
        return false;
    }
    }
};

function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault()
    
        const emailValido = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+\.([a-z])?$/i;

        if(this.value.match(emailValido)) {
            document.querySelector(.'mensagem').innerHTML = "";
            this.classList.remove('erro'); 
            this.parentNode.classList.remove('erro');
        }else{
            document.querySelector(.'mensagem').innerHTML = "Verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}

let camposObrigatorios=document.querySelectorAll('input obrigatorio');
let camposNumericos=document.querySelectorAll('input numero');
let camposEmail=document.querySelectorAll('input email');

for(let emFoco of camposObrigatorios){
    validaCampo(emFoco);
}

for(let emFoco of camposNumericos){
    validaCampoNumerico(emFoco);
}

for(let emFoco of camposEmail){
    validaCampoNumerico(emFoco);
}