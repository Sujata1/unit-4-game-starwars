
var obi = {
    name: "obi-Wan",
    healthPoint: 450,
    attackPower: 8,
    counterAttackPower: 20,
    baseAttackPower: 8
};

var luke = {
    name: "luke-skywalker",
    healthPoint: 220,
    attackPower: 16,
    counterAttackPower: 20,
    baseAttackPower: 6
};

var darth = {
    name: "darth-stious",
    healthPoint: 110,
    attackPower: 16,
    counterAttackPower: 20,
    baseAttackPower: 6
};

var maul = {
    name: "darth-maul",
    healthPoint: 125,
    attackPower: 16,
    counterAttackPower: 20,
    baseAttackPower: 6
};

var characterData = { obi: obi, maul: maul, darth: darth, luke: luke };
var charactersArray = ["obi", "luke", "darth", "maul"];
var imgArray = ["./assets/images/obi.png", "./assets/images/luke-skywalker.jpg", "./assets/images/darth-sidious.png", "./assets/images/Darth_Maul.jpg"];

var myChar = "";
var defendChar = "";
var myId = "";
var myHPId = "";
var defendId = "";
var defendHPId = "";
var myCharHP = 0;
var myCharAP = 0;
var myCharBAP = 0;
var defenderHP = 0;
var defenderCAP = 0;
var numberEnemies = 0;
var saveMyHP = 0;
var saveDeferderHP = 0;

// Click characters
$(".card").on("click", function () {
    if (myChar === "") {                                //First Click to select My Character
        myId = $(this).attr("id");
        myHPId = "#" + $(this).children().last().attr('id');
        myChar = characterData[$(this).attr("id")];
        for (var i = 0; i < 4; i++) {
            var imgid = charactersArray[i];
            var imgidRef = "#" + imgid;
            if (imgid === myId) {
                $('#YourCharacter').append($(this));
                myCharHP = myChar.healthPoint;
                saveMyHP = myChar.healthPoint;
                myCharAP = myChar.attackPower;
                myCharBAP = myChar.baseAttackPower;
            }
            else {
                $(imgidRef).appendTo("#enemies");
            }
        }
        $("#characters").empty();
    }
    else {                                //second + Clicks to select Defenders
        if (defendChar === "") {          
            defendId = $(this).attr("id");
            defendHPId = "#" + $(this).children().last().attr('id');
            defendChar = characterData[$(this).attr("id")];
            $("#defender").empty();
            $(this).appendTo("#defender");
            defenderHP = defendChar.healthPoint;
            saveDeferderHP = defendChar.healthPoint;
            defenderCAP = defendChar.counterAttackPower;
            numberEnemies += 1;
            $("#myChar-result").text("");
            $("#defender-result").text("");
        }
    }
});

//click Attack
$("#attack").on("click", function () {
    if (myChar != "" && defendChar != "") {
        myCharHP -= defenderCAP;
        defenderHP -= myCharAP;
        $(myHPId).text(myCharHP);
        $(defendHPId).text(defenderHP);


        var myChar_result = "You attacked " + defendChar.name + " for " + myCharAP + " damages.";
        var defender_result = defendChar.name + " attacked you back for " + defenderCAP + " damages.";
        myCharAP += myCharBAP;

        if (myCharHP <= 0) {
            // MyChar Defeated
            myChar_result = "You Are defeted.. Game Over!!";
            $("#myChar-result").text(myChar_result);
            $("#defender-result").text("");
            $("#reset").css("display", "block");
        }

        if (defenderHP <= 0) {
            // defenderChar Defeated
            defendChar = "";
            $("#defender-result").text("");
            if (numberEnemies === 3) {
                myChar_result = "You Won.. Game Over!!";
                $("#myChar-result").text(myChar_result);
                $("#reset").css("display", "block");
            }
            else {
                myChar_result = "You Won..  Select Another Defender"
                $("#myChar-result").text(myChar_result);
                myCharHP = myChar.healthPoint;

            }
        }

        if (myCharHP > 0 && defenderHP > 0) {
            $("#myChar-result").text(myChar_result);
            $("#defender-result").text(defender_result);
        }

    }
});

//click restart
$("#reset").on("click", function () {
    $(myHPId).text(saveMyHP);
    $(defendHPId).text(saveDeferderHP);
    $("#obi").appendTo("#characters");
    $("#luke").appendTo("#characters");
    $("#darth").appendTo("#characters");
    $("#maul").appendTo("#characters");

    $("#enemies").empty();
    $("#YourCharacter").empty();
    myChar = "";
    defendChar = "";
    myId = "";
    defendId = "";
    myCharHP = 0;
    myCharAP = 0;
    myHPId = "";
    defendHPId = "";
    myCharBAP = 0;
    defenderHP = 0;
    defenderCAP = 0;

    $("#myChar-result").text("");
    $("#defender-result").text("");
    $("#reset").css("display", "none");
});

//$("body").on("click", ".enemyChar", function () {

//});







