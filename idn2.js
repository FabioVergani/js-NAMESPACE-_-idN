'use strict';
var global=window;

global.unid=(function(p){return function(e){var n=e[p]||0;e[p]=++n;return n}})('uid-n');

/*
console.log(unid(window));//1
console.log(unid(window));//2
*/

function listenOnce(e,l,f){
 var n=unid(e);n='f'+n;e.addEventListener(l,e[n]=(function(evt){f(evt);e.removeEventListener(l,e[n],0)}),0);
};

function bodyclicked(x){
	console.log('call #b')
}

function test(x){
	var body=document.body;
listenOnce(body,'click',bodyclicked);
listenOnce(body,'click',bodyclicked);
	console.log('call #a', Date.now())
}

console.clear();
listenOnce(window,'load',test);
listenOnce(window,'load',test);
console.dir(window);
