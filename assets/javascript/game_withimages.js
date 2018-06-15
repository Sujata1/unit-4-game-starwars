

var obi = {
    name: "obi",
    healthPoint: 120,
    attackPower: 16,
    counterAttackPower: 20,
    baseAttackPower: 8
};

var luke = {
    name: "luke",
    healthPoint: 145,
    attackPower: 16,
    counterAttackPower: 20,
    baseAttackPower: 6
};


var darth = {
    name: "darth",
    healthPoint: 145,
    attackPower: 16,
    counterAttackPower: 20,
    baseAttackPower: 6
};


var maul = {
    name: "maul",
    healthPoint: 145,
    attackPower: 16,
    counterAttackPower: 20,
    baseAttackPower: 6
};
var xx;
var yy;
var chardata = {xx = {
    obi: "obi",
    healthPoint: 120,
    attackPower: 16,
    counterAttackPower: 20,
    baseAttackPower: 8,},
    yy = {
        obi: "obi",
        healthPoint: 120,
        attackPower: 16,
        counterAttackPower: 20,
        baseAttackPower: 8,}
};

var characterData = {obi: obi, maul: maul, darth: darth, luke: luke};

var charactersArray = ["obi", "luke", "darth", "maul"];
var imgArray = ["./assets/images/obi.png", "./assets/images/luke-skywalker.jpg", "./assets/images/darth-sidious.png", "./assets/images/Darth_Maul.jpg"];

var myChar = "";
var defendChar="";
var myId="";
var defenderId="";


$(".playchr").on("click", function () {
    myId = $(this).attr("id");
    myChar = chardata[$(this).attr("id")];
    for (var i = 0; i < 4; i++) {
        var imgid = charactersArray[i];
        var imgidRef = "#" + imgid;
        if (imgid === myId) {
            $("#YourCharacter").html("<img id=" + imgid + " class = 'yourChar' src=" + imgArray[i] + "></img>");
            $(imgidRef).remove();
            

        }
        else {
            $("#enemies").append("<img id=" + imgid + " class = 'enemyChar' src=" + imgArray[i] + "></img>");
            $(imgidRef).remove();
        }
    }

   
});

$("body").on("click", ".enemyChar", function () {
    
   // defendChar = $(this).attr("id");
   defenderId = $(this).attr("id");
    defendChar=  characterData[$(this).attr("id")];
    var imgIndex = charactersArray.indexOf(defenderId);

    if (imgIndex > -1) {
        var imgid = charactersArray[imgIndex];
        var imgidRef = "#" + defenderId;
        $(imgidRef).remove();
        $("#defender").empty();
        $("#defender").append("<img id=" + imgid + " class = 'enemyChar' src=" + imgArray[imgIndex] + "></img>");
    }
});

$("#attack").on("click", function () {
    console.log("myChar :"+myChar);
    console.log("defendChar :"+defendChar);
    
    console.log("myChar hp:"+myChar.healthPoint);
    
    console.log("obi hp:"+obi.healthPoint);
});








