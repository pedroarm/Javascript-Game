function Sprite(x, y, largura, altura){
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xCanvas, yCanvas) {
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
    }
}

var bg = new Sprite(0, 0, 600, 600),
spriteBoneco = new Sprite(618, 16, 70, 73),

perdeu = new Sprite(316, 770, 245, 265),
jogar = new Sprite(48, 800, 232, 230),
novo = new Sprite(48, 1074, 233, 277),
spriteChao = new Sprite(0, 620, 600, 75);