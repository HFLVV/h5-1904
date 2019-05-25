class Hero{
    constructor(){
        this.heart = 3;
        this.heartImg = document.getElementById("blood").getElementsByTagName("img");
        this.left = 0;
        this.top = 0;
        this.imgs = ["image/hero.gif","image/hero-bang.gif"]
        this.self = null;
    }
    createHero(){
        var img = document.createElement("img");
        img.src = this.imgs[0];
        engine.engineBg.appendChild(img);
        this.self = img;
        this.move();
        this.createBullet();
    }
    move(){
        document.addEventListener("mousemove",this.handleMoveCb.bind(this))
    }
    handleMoveCb(e){
    
        var e = e||event;

        var l = e.clientX -  engine.engineBg.offsetLeft - this.self.offsetWidth/2;
        var t = e.clientY -  engine.engineBg.offsetTop - this.self.offsetHeight/2;


        if(l<=0){
            l=0;
        }


        if(t<=0){
            t=0;
        }


        if(l>=engine.engineBg.offsetWidth - this.self.offsetWidth){
            l = engine.engineBg.offsetWidth - this.self.offsetWidth
        }

        if(t>=engine.engineBg.offsetHeight - this.self.offsetHeight){
            t = engine.engineBg.offsetHeight - this.self.offsetHeight
        }




        this.self.style.left = l+'px';
        this.self.style.top = t+'px';

        this.left = l;
        this.top = t;

    }
    die(){
        this.heart--;
        
        if(this.heartImg.length>0){
            this.heartImg[0].remove();
        }


        if(this.heart == 0){
            alert("游戏结束");
            location.reload();
        }
    }
    createBullet(){
        setInterval(this.handleCreateBulletCb.bind(this),100)
    }
    handleCreateBulletCb(){

        var l = this.left + this.self.offsetWidth/2;
        new Bullet(l,this.top).createBullet();
    }
}