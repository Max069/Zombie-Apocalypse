class Start{
    display(){
        this.title= createElement('h2')
        this.title.html("Zombie Apocalypse")
        this.title.position(width/2-200,100)

        this.button= createButton('Start')
        this.button.position(width/2-50,250)

        this.button.mousePressed(()=>{
            gameState="Play"
        })
    }
}