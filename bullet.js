class Bullet{
    constructor(l,t){
        this.l = l;
        this.t = t;
        this.img = "image/bullet1.png";
        this.self = null;
        this.speed = -2;
        this.id = null;
    }
    createBullet(){
        var img = document.createElement("img");
        img.src = this.img;
        //子弹的位置
        var _this = this;
        
       img.onload = function(){
            this.style.left  = _this.l - this.offsetWidth/2 +'px';
            this.style.top = _this.t - this.offsetHeight + 'px';
       }


        engine.engineBg.appendChild(img);
        this.self = img;


        //为了子弹的销毁 以及创建因此做一个id值
        this.id = Math.random();
        engine.bullet[this.id] = this;
    }
    //子弹移动
    move(){
        this.self.style.top = this.self.offsetTop + this.speed + 'px';
        if(this.self.offsetTop<= -this.self.offsetHeight){
            this.destory();
        }



        //检测敌机和子弹相撞

        for(var i in engine.enemy){
            if(engine.ispeng(this.self,engine.enemy[i].self)){
                //碰撞到的子弹自动销毁
                this.destory();

                //敌机的血量减减
                engine.enemy[i].blood--;
                //如果血量为0则销毁
                if(engine.enemy[i].blood == 0){
                    engine.enemy[i].destory();
                }
            }
        }



    }
    destory(){
        this.self.remove();
        delete  engine.bullet[this.id];
    }
}