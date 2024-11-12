const container = document.querySelector('.container');


for( let i =0 ; i<600 ; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
}


document.addEventListener( 'mousemove' , (e) => {
    document.querySelectorAll('.box').forEach(box => {
        let x = e.pageX - box.offsetLeft;
        let y = e.pageY - box.offsetTop;

        let dist = Math.sqrt(x*x + y*y);
        let score = Math.exp(dist * -0.015);
        box.style.transform = 'scale(' + score*4 + ')';
    })
})