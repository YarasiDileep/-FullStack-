class Text {
    constructor(){
        console.log("This is Text Message");
    }
}
class Message extends Text{
    constructor(){
        super()
        console.log("This is Message");
    }
}
new Message()