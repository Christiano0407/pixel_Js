const myImg = new Image(); 
myImg.src = `../assets/images/tyler-nix-jE-27l7V3NU-unsplash.jpg `

myImg.addEventListener(`load`, function() {
    const canvas = document.getElementById(`canvas2`);
    const ctx = canvas.getContext(`2d`);
    canvas.width = 500;
    canvas.height = 700;
    
    ctx.drawImage(myImg, 0, 0,  canvas.width, canvas.height);
}); 