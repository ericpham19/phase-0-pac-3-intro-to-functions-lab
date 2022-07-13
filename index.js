function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(hello){
    console.log(hello.toUpperCase());


}
   
function logWhisper(hello){
    console.log(hello.toLowerCase());
}




function sayHiToHeadphonedRoommate(hello){
    if (hello.toLowerCase() === hello){
        return  "I can\'t hear you!";
    }

    if (hello.toUpperCase() === hello){
        return "YES INDEED!";
    }

    if ("Let\'s have dinner together!" === hello ){
        return "I would love to!";

    }

}
       


