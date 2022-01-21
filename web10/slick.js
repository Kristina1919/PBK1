window.addEventListener("DOMContentLoaded", function (event) {
    var profit = document.getElementById("myform");
      profit.addEventListener("input", function(event) {
      update();
    });
});
$(function(){
    $("#myform").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    alert("The form is submitted");
                    localStorage.clear();
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    $("#comment").val(localStorage.getItem(""));
                }else{
                    alert("Error: " + response.message);
                }
            }
        });
    });
});

var form = document.getElementById("myform");
var field = document.getElementById("char");
var butt1 = document.getElementById("formbutt");
var butt2 = document.getElementById("visform");
inactive();

function active() {
    butt1.style.display = "block";
    butt2.style.display = "none";
    field.style.display = "block";
    getData();
}

function inactive() {
    butt1.style.display = "none";
    butt2.style.display = "block";
    field.style.display = "none";
}

$(".slbutt").click(function(){
    window.location.href="#mycontacts";
    active();
    window.history.pushState( 1,'fields', '#mycontacts');
});

$("#visform").click(function(){
    active();
    window.history.pushState( 1,'fields', '#mycontacts');
});

window.onpopstate = function(event) {
    inactive();
};

function update() {
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("comment", $("#comment").val());
}

function getData() {
    document.getElementById("name").value = localStorage.getItem("name");
    document.getElementById("email").value = localStorage.getItem("email");
    $("#comment").val(localStorage.getItem("comment"));
}

function active() {
    butt1.style.display = "block";
    butt2.style.display = "none";
    field.style.display = "block";
    getData();
}

function inactive() {
    butt1.style.display = "none";
    butt2.style.display = "block";
    field.style.display = "none";
}
$(document).ready(function(){
    $('.myslick-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 800,
            settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 1,
              arrows: true,
              dots: false
            }
          }]
      });
});
$(document).ready(function(){
  $('.cert-slider').slick({
    slidesToShow: 3,
    infinite: true,
    prevArrow: '<i class="material-icons prev2">keyboard_arrow_left</i>',
    nextArrow: '<i class="material-icons next2">keyboard_arrow_right</i>',
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: true,
          slidesToShow: 2
        }
      }]
  });
});
$(".butt2").click(function(){
      
  $("html").addClass("openNav");

});
$(".bcanc").click(function(){

$("html").removeClass("openNav");

});
