const img = document.querySelector("#image");

img.addEventListener("mouseover" , ()=>{
    img.src = "./on bulb.png"
})
img.addEventListener("mouseout" , ()=>{
    img.src = "./off bulb.png"
})