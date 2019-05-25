class Engine{
    constructor(){
        this.state = false;
        this.engineBg = document.getElementById("engine");
        this.score = document.querySelector("#score>span");
        this.bullet = {};
        this.enemy = {};
        this.speed = 0;
        this.init();
    }
    init(){
        this.start();
    }
    start(){
        this.engineBg.addEventListener("click",this.handleStartCb.bind(this))
    }
    handleStartCb(){
        if(!this.state){
            //游戏开始的状态
            this.state=true;
            //游戏背景移动
            this.engineBgMove();
            //实例化英雄机
            this.hero = new Hero();
            //创建英雄机
            this.hero.createHero();
            //发射子弹
            this.bodyMove();
            //创建敌机器
            this.createEnemy();
        }
    }
    engineBgMove(){
        setInterval(this.handleEngineMoveCb.bind(this),30)
    }
    handleEngineMoveCb(){
        this.speed += 2;
        this.engineBg.style["background-position-y"] = this.speed+'px';
    }
    createEnemy(){
        setInterval(this.createEnemyCb.bind(this),500)
    }
    createEnemyCb(){
        var n = parseInt(1+Math.random()*(15-1));
        switch(n){
            case 1:
            case 3:
            case 5:
            case 7:
                new SmallEnemy().createEnemy();
                break;
            case 2:
            case 4:
            case 6:
                new MiddleEnemy().createEnemy();
                break;
            case 10:
            case 12:
                new BigEnemy().createEnemy();
                break;
            default:
                return;

        }
    }
    bodyMove(){
        setInterval(this.handleBodyMoveCb.bind(this),30)
    }
    ispeng(obj1,obj2){

        var l1 = obj1.offsetLeft > obj2.offsetLeft + obj2.offsetWidth;
        var l2 = obj2.offsetLeft > obj1.offsetLeft + obj1.offsetWidth;

        var t1 = obj1.offsetTop > obj2.offsetTop + obj2.offsetHeight;
        var t2 = obj2.offsetTop > obj1.offsetTop + obj1.offsetHeight;


        if(l1 || l2 || t1 || t2 ){
            return false;
        }else{
            return true;
        }

    }
    handleBodyMoveCb(){
        for(var i in this.bullet){
            this.bullet[i].move();
        }

        for(var i in this.enemy){
            this.enemy[i].move();
        }
    }
    getScore(n){
        this.score.innerText = Number(this.score.innerText)+ Number(n)
        
    }
}

let engine = new Engine();