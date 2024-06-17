let in_telefone = document.getElementById('telefone');
let in_email = document.getElementById('email');
let in_nome = document.getElementById('nome');

let lista = JSON.parse(localStorage.getItem('pedido'))
let val = JSON.parse(localStorage.getItem('valores'))

var modal = document.getElementById('modal');
var overlay = document.getElementById('overlay');

function salvar_Comp(){

    monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")

    let nome = in_nome.value;
    let email = in_email.value;
    let telefone = in_telefone.value;

    const agora = new Date();

    if (email == '' && telefone == ''){
        alert('Todos os campos devem ser preenchidos!')
    }        
    else {   
        var imgData = "./images/logo_pizza.png"; // base-64
        var doc = new jsPDF()
        doc.addImage(imgData, 'JPEG', 70, 10, 60, 20);
        doc.setFontSize(25)
        doc.text('Comprovante de Compra', 50, 50)
        doc.setFontSize(16)
        doc.text('Cliente ---------------------------------------------', 50, 70) 
        doc.setFontSize(12)
        doc.text('Nome: ' + nome, 50, 80)
        doc.text('Email: ' + email, 50, 90)
        doc.text('Telefone: ' + telefone, 50, 100)
        doc.setFontSize(16)
        doc.text('Pedido ----------------------------------------------', 50, 120)
        doc.setFontSize(12)
        doc.text('Pizza: ' + lista.Nome, 50, 130)
        doc.text('Descrição: ' + lista.Descricao, 50, 140)
        doc.text('Quantidade: ' + lista.Qtd, 50, 150)
        doc.text('Preço: ' + lista.Preco, 50, 160)
        doc.text('Tamanho: ' + lista.Tamanho, 50, 170)
        doc.text('--------------------------------------------------------------------------', 50, 180)
        doc.text('Data: ' + agora.getDate() + ' de ' + monName [agora.getMonth() ] + ' de ' + agora.getFullYear(), 50, 190)
        doc.text('Hora: ' + agora.getHours() + ':' + agora.getMinutes() + ':' + agora.getSeconds(), 50, 200)
       
        doc.setFontSize(10)
        doc.text('© Developed by Matheus Cruz', 80, 280)
        doc.save('comprovante.pdf')

        openModal()
    }   
}

function cancelar_Comp(){    
    window.location.href = "index.html";       
}


function openModal(){
    modal.style.display = "block";
    overlay.style.display = "block";
}


function closeModal(){
    modal.style.display = "none";
    overlay.style.display = "none";

    window.location.href= 'index.html';
}