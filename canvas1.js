window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas1');
    const ctx = canvas.getContext('2d');

    const resetCanvas = () => {
        ctx.drawImage(imgWhite, 0, 0)
        ctx.beginPath();
        ctx.moveTo(30,canvas.height / 2);
        ctx.lineTo(canvas.width - 10,canvas.height / 2);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#FFFFFF";
        ctx.stroke();
    }

    canvas.height = window.innerHeight / 17;
    canvas.width = window.innerWidth / 1.18;


    var imgWhite = new Image();
    imgWhite.src = './white.png'

    var img = new Image();
    img.src = './factory1.png';

    let imgWidth = 50;
    let imgHeight = 40;
    let percent = 0;

    let coordinate1 = canvas.width / 2.6;
    let coordinate2 = canvas.height / 2;

    function redraw() {
        resetCanvas();
        ctx.drawImage(img, coordinate1 - 28, coordinate2 - 20, imgWidth, imgHeight)
    }

    img.onload = function () {
        redraw();
    }


    let clicked = false;

    function mouseOn(e) {
        clicked = true;
        if(e.touches[0].clientX < (window.innerWidth - canvas.width) / 2 + canvas.width - imgWidth / 2) {
            coordinate1 = e.touches[0].clientX - (window.innerWidth - canvas.width) / 2;
        } else {
            coordinate1 = canvas.width - (imgWidth / 2);
        }
        if(e.touches[0].clientX < (window.innerWidth - canvas.width) / 2 + imgWidth / 2) {
            coordinate1 = imgWidth / 2;
        }
        redraw();
        percent = Math.round((e.touches[0].clientX - ((window.innerWidth - canvas.width) / 2)) / (canvas.width / 100));
        percent < 0 ? percent = 0 : percent = percent;
        percent > 100 ? percent = 100 : percent = percent;
        $('#number1').html(Math.round((1000 + ((4000) / 100)*percent) * 100) / 100 + ' თბო.ელ.სადგ')
    }

    function mouseOff() {
        clicked = false;
    }

    function mouseDrag(e) {
        if (!clicked) return;
        if (clicked) {
            redraw();
            if(e.touches[0].clientX < (window.innerWidth - canvas.width) / 2 + canvas.width - imgWidth / 2) {
                coordinate1 = e.touches[0].clientX - (window.innerWidth - canvas.width) / 2;
            } else {
                coordinate1 = canvas.width - (imgWidth / 2);
            }
            if(e.touches[0].clientX < (window.innerWidth - canvas.width) / 2 + imgWidth / 2) {
                coordinate1 = imgWidth / 2;
            }
            percent = Math.round((e.touches[0].clientX - ((window.innerWidth - canvas.width) / 2)) / (canvas.width / 100));
            percent < 0 ? percent = 0 : percent = percent;
            percent > 100 ? percent = 100 : percent = percent;
            $('#number1').html(Math.round((1000 + ((4000) / 100)*percent) * 100) / 100 + ' თბო.ელ.სადგ')
        }
    }

    canvas.addEventListener('touchstart', mouseOn)
    canvas.addEventListener('touchend', mouseOff)
    canvas.addEventListener('touchmove', mouseDrag)
});
