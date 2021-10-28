class Player{
    constructor(){
        this.body= createSprite(50,200,20,20)
        this.body.addImage(Human)
        this.body.scale=(0.7)
        this.body.debug= true
        this.body.setCollider("circle",0,0,100)
        this.body.velocityY=4
    }
}