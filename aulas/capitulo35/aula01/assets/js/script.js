window.addEventListener("load", function(){
    console.log("Load iniciado");
});

window.addEventListener("DOMContentLoaded", function(){
    console.log("DOMContentLoaded iniciado");
});

window.addEventListener("resize", function(e){
    console.log("Resized iniciado");
    console.log(e);
});

window.addEventListener("scroll", function(e){
    console.log("Scroll iniciado");
    console.log(e);
    console.log("scroll Y", pageYOffset);
});

window.addEventListener("unload", function(){
    console.log("Unload iniciado");
});

window.addEventListener("beforeunload", function(){
    console.log("Beforeunload iniciado");
});