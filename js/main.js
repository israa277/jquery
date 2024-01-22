/// <reference types="../@types/jquery"/>

// const { data } = require("../@types/jquery");



$('.linkHref').on('click',function(e){
    let ahref =  e.target.getAttribute('href');
    let sectionOffset = $(ahref).offset().top;
    $('html,body').animate({scrollTop:sectionOffset}, 3000)

 })
 

$('.open').on('click',function(){
    $('.sidebar').animate({width:'toggle'} , 500 )
})

$('.side-icon').on('click',function(){
    $('.sidebar').animate({width:'hide'},500)
})

let myTextArea = document.getElementById('my-text');
let remainingText = document.getElementById('text-char');
let maxChar = 100;
myTextArea.addEventListener('input' , ()=>{
    let remaining = maxChar - myTextArea.value.length;
    if (remaining>0){
        remainingText.innerHTML = `<span class="text-danger">${remaining}</span> Characyer Reamining`

    }else{
        remainingText.innerHTML = `<span class="text-danger">your available character finished</span> Characyer Reamining`

    }
}) 

let days =document.getElementById('Days');
let hours=document.getElementById('hours');
let min=document.getElementById('min');
let sec=document.getElementById('sec');
let countDownDate = new Date('Oct 25 ,2023 23:59:59').getTime();
let counter = setInterval(()=>{
    let dateNow = new Date().getTime()
    let datediff = countDownDate - dateNow
    let d =Math.floor(datediff / 1000 / 60 / 60 / 24) ;
    let h = Math.floor((datediff % (1000 * 60 * 60 * 24))/1000/60/60);
    let m = Math.floor((datediff % (1000 * 60 * 60))/1000/60);
    let s = Math.floor((datediff % (1000 * 60 ))/1000);
    days.innerHTML = `${d} D`
    hours.innerHTML = `${-h} H`
    min.innerHTML = `${-m} m`
    sec.innerHTML = `${-s} s`
},1000)


$('h3').on('click' , function(e){
   $(e.target).next().slideToggle()
} )