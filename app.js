"use strict";document.addEventListener("DOMContentLoaded",(function(){ymaps.ready((function(){var e=new ymaps.Map("map",{center:[55.760216,37.61477],zoom:13,controls:[]}),a=new ymaps.Placemark([55.766228,37.626969],{},{iconLayout:"default#image",iconImageHref:"/images/mapmarker.svg",iconImageSize:[12,12],iconImageOffset:[-3,-42]});e.geoObjects.add(a)}));var e=new JustValidate(".about__form",{errorLabelStyle:{color:""}}),a=new JustValidate(".contacts__form",{errorLabelStyle:{color:""}});e.addField("#about__email",[{rule:"required",errorMessage:"Введите e-mail"},{rule:"email",errorMessage:"Недопустимый формат"}]),a.addField("#contacts__form-name",[{rule:"required",errorMessage:"Введите имя"}]).addField("#contacts__form-email",[{rule:"required",errorMessage:"Введите e-mail"},{rule:"email",errorMessage:"Недопустимый формат"}]);var o=document.querySelector(".nav__btn-open"),r=document.querySelector(".nav__btn-close"),n=gsap.timeline({paused:!0});n.to(".nav__menu",{duration:.5,display:"block",opacity:1}),o.onclick=function(){n.play()},r.onclick=function(){n.reverse()};var t=document.querySelector(".header__btn-search-open"),c=document.querySelector(".search-block__close"),i=gsap.timeline({paused:!0});window.matchMedia("(min-width:968px)").matches&&i.to(".nav__menu",{duration:.1,display:"none",opacity:"0"}),i.fromTo(".header__search-block",{display:"none",opacity:"0"},{display:"grid",opacity:1}),t.onclick=function(){i.play()},c.onclick=function(){i.reverse()};var l=document.querySelector(".map-block__btn-close-btn"),s=gsap.timeline({paused:!0});s.to(".map-block__desc-block",{duration:.2,opacity:0,display:"none"}),l.onclick=function(){s.play()}}));
