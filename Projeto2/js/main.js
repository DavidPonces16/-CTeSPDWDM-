"use strict";

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  //Offcanvas Menu
  $(".canvas-open").on("click", function () {
    $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").addClass("active");
  });

  $(".canvas-close, .offcanvas-menu-overlay").on("click", function () {
    $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").removeClass("active");
  });

  // Search model
  $(".search-switch").on("click", function () {
    $(".search-model").fadeIn(400);
  });

  $(".search-close-switch").on("click", function () {
    $(".search-model").fadeOut(400, function () {
      $("#search-input").val("");
    });
  });

  /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true,
  });

  /*------------------
        Hero Slider
    --------------------*/
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    mouseDrag: false,
  });

  /*------------------------
		Testimonial Slider
    ----------------------- */
  $(".testimonial-slider").owlCarousel({
    items: 1,
    dots: false,
    autoplay: true,
    loop: true,
    smartSpeed: 1200,
    nav: true,
    navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
  });

  /*------------------
        Magnific Popup
    --------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  /*------------------
		Date Picker
	--------------------*/
  $(".date-input").datepicker({
    minDate: 0,
    dateFormat: "dd MM, yy",
  });

  /*------------------
		Nice Select
	--------------------*/
  $("select").niceSelect();
})(jQuery);

//loading ao fazer verificação de disponibilidade de reserva (index.html)
// document.getElementById("verificar-disponibilidade").addEventListener("click", function(event) {
//     event.preventDefault(); // evita que a página seja recarregada ao clicar no botão
//     var overlay = document.getElementById("overlay");
//     overlay.style.display = "block";
//     setTimeout(function(){
//       overlay.style.display = "none";
//       alert("Reserva concluída");
//     }, 5000);
// });

//ao verificar a disponibilidade (index.html) ele envia pro login
if (document.getElementById("verificar-disponibilidade")) {
  document
    .getElementById("verificar-disponibilidade")
    .addEventListener("click", function (event) {
      event.preventDefault(); // evita que a página seja recarregada ao clicar no botão
      window.location.href = "login.html"; // redireciona para a página "login.html"
    });
}

//após o login realizado seleciono o que o utilizador quer e faço a reserva ao cliar no botão
//loading ao fazer verificação de disponibilidade de reserva (room-details.html)
if (document.getElementById("verificar-disponibilidade-room-details")) {
  document
    .getElementById("verificar-disponibilidade-room-details")
    .addEventListener("click", function (event) {
      event.preventDefault(); // impede que a página seja recarregada ao enviar o formulário
      var overlay = document.getElementById("overlay");
      overlay.style.display = "block";
      setTimeout(function () {
        overlay.style.display = "none";
        alert("Reserva concluída");
      }, 5000);
    });
}

//verificação se palavras passe são iguais para assim fazer o login
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  const password = document.querySelector("#password").value;
  const confirm_password = document.querySelector("#confirm-password").value;
  if (password !== confirm_password) {
    alert("As PassWords não correspondem");
    event.preventDefault();
  }
});

//remoção de uma linha da tabela quartos ou reservas da parte de administração
function removerLinha(botao) {
  const linha = botao.parentNode.parentNode;
  linha.parentNode.removeChild(linha);
}

// script de adicionar campos para a tabela
// selecione o botão "Adicionar" no formulário e adicione um ouvinte de evento de clique
var addButton = document.querySelector('#roomForm .button.primary');
addButton.addEventListener('click', function(event) {
  // previne o comportamento padrão do botão de envio do formulário
  event.preventDefault();
  
  // obter os valores dos campos de entrada do formulário
  var nomeQuarto = document.querySelector('#firstName').value;
  var tamanho = document.querySelector('#lastName').value;
  var capacidade = document.querySelector('#email').value;
  var servicos = document.querySelector('#Idade').value;
  
  // selecionar a tabela na página roomList.html
  var table = document.querySelector('#roomListTable');
  
  // criar uma nova linha da tabela e adicionar as células com os valores dos campos do formulário
  var newRow = table.insertRow(-1);
  var nomeQuartoCell = newRow.insertCell(0);
  var tamanhoCell = newRow.insertCell(1);
  var capacidadeCell = newRow.insertCell(2);
  var servicosCell = newRow.insertCell(3);
  nomeQuartoCell.innerHTML = nomeQuarto;
  tamanhoCell.innerHTML = tamanho;
  capacidadeCell.innerHTML = capacidade;
  servicosCell.innerHTML = servicos;
  
  // limpar os valores dos campos do formulário
  document.querySelector('#firstName').value = '';
  document.querySelector('#lastName').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#Idade').value = '';
});
