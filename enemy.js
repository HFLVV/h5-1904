class Enemy{
    constructor(){
        this.left = 0;
        this.top = 0;
        this.self = null;
        this.id = null;
    }
    createEnemy(){
        var img = document.createElement("img");
        img.src = this.imgs[0];

        img.onload = function(){
            this.style.left = parseInt(Math.random()*(320 - this.offsetWidth)) + 'px';
            this.style.top = -this.offsetHeight + 'px';
        }

        engine.engineBg.appendChild(img);
        this.self = img;


        //将敌机放入引擎
        this.id = Math.random();
        engine.enemy[this.id] = this;
    }
    move(){
        this.self.style.top = this.self.offsetTop + this.speed + 'px';

        this.left = this.self.offsetLeft;
        this.top = this.self.offsetTop;

        if(this.self.offsetTop>=568){
            this.destory();
        }



        //敌机与英雄机碰撞


        if(engine.ispeng(this.self,engine.hero.self)){
            //敌机消失
            this.destory();

            //英雄机掉血
            engine.hero.die();



        }
    }
    //问题
    boom(){
        var img = document.createElement("img");
        img.src = this.imgs[1];
        img.style.left = this.left + 'px';
        img.style.top = this.top + 'px';
        engine.engineBg.appendChild(img);

        setTimeout(this.handleBoomCb.bind(this,img),2000)
    }
    handleBoomCb(img){
        img.remove();
    }
    destory(){
        engine.getScore(this.score);
        this.self.remove();
        delete engine.enemy[this.id];

        this.boom();
    }
}