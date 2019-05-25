class SmallEnemy extends Enemy{
    constructor(){
        super();
        this.speed = parseInt(2+Math.random()*(5-2));
        this.imgs = ["image/enemy1.png","image/enemy1-bang.gif"];
        this.score = 1;
        this.blood = 1;
    }
}

class MiddleEnemy extends Enemy{
    constructor(){
        super();
        this.speed = parseInt(2+Math.random()*(4-2));
        this.imgs = ["image/enemy2.png","image/enemy2-bang.gif"];
        this.score = 5;
        this.blood = 5;
    }
}

class BigEnemy extends Enemy{
    constructor(){
        super();
        this.speed = parseInt(1+Math.random()*(3-1));
        this.imgs = ["image/enemy3.png","image/enemy3-bang.gif"];
        this.score = 10;
        this.blood = 10;
    }
}