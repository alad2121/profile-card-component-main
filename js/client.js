const gsap = new TimelineMax();

var items_numbers = document.querySelectorAll(".item h2");
var items_text = document.querySelectorAll(".item h3")


gsap.from(".name-age",1,{
    y:-15,
    ease: "bounce.out",
    opacity:0
}).from(".location",1,{
    ease: "bounce.out",
    y:-15,
    opacity:0
})

for(let a = 0; a < items_numbers.length; a++){
    items_numbers[a].animation =  gsap.from(items_numbers[a],{
        ease: "Power2.easeOut",
        duration: 0.5,
        y:100
    });
    items_text[a].animation = gsap.from(items_text[a],0.8,{
        y:100
    });
}