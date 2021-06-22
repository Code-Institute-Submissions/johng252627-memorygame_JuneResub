//For revealing the puzzles
$(document).ready(function(){
    $("#puzzle1").one("click", function(){
        $("#memorise1").text("7263").delay(3000).queue(function(next){
            $(this).text("Now guess!");
            next();
        });
    });
});

$(document).ready(function(){
    $("#puzzle2").one("click", function(){
        $("#memorise2").text("27409").delay(2000).queue(function(next){
            $(this).text("Now guess!");
            next();
        });
    });
});

$(document).ready(function(){
    $("#puzzle3").one("click", function(){
        $("#memorise3").text("580342").delay(1000).queue(function(next){
            $(this).text("Now guess!");
            next();
        });
    });
});

$(document).ready(function(){
    $("#puzzle4").one("click", function(){
        $("#memorise4").text("8921674").delay(500).queue(function(next){
            $(this).text("Now guess!");
            next();
        });
    });
});

$(document).ready(function(){
    $("#puzzle5").one("click", function(){
        $("#memorise5").text("28493671").delay(500).queue(function(next){
            $(this).text("Now guess!");
            next();
        });
    });
});

$(document).ready(function(){
    $("#puzzle6").one("click", function(){
        $("#memorise6").text("274081682").delay(500).queue(function(next){
            $(this).text("Now guess!");
            next();
        });
    });
});

//For changing the colors of the guess
$(document).ready(function(){
    $("#guess1a").click(function(){
        $("#guess1a").removeClass("guess").addClass("guessWrong");
    });
});

$(document).ready(function(){
    $("#guess1b").click(function(){
        $("#guess1b").removeClass("guess").addClass("guessWrong");
    });
});

$(document).ready(function(){
    $("#guess1c").click(function(){
        $("#guess1c").removeClass("guess").addClass("guessRight");
    });
});

$(document).ready(function(){
    $("#guess2a").click(function(){
        $("#guess2a").removeClass("guess").addClass("guessRight");
    });
});

$(document).ready(function(){
    $("#guess2b").click(function(){
        $("#guess2b").removeClass("guess").addClass("guessWrong");
    });
});

$(document).ready(function(){
    $("#guess2c").click(function(){
        $("#guess2c").removeClass("guess").addClass("guessWrong");
    });
});

$(document).ready(function(){
    $("#guess3a").click(function(){
        $("#guess3a").removeClass("guess").addClass("guessWrong");
    });
});

$(document).ready(function(){
    $("#guess3b").click(function(){
        $("#guess3b").removeClass("guess").addClass("guessWrong");
    });
});

$(document).ready(function(){
    $("#guess3c").click(function(){
        $("#guess3c").removeClass("guess").addClass("guessRight");
    });
});

$(document).ready(function(){
    $("#guess4a").click(function(){
        $("#guess4a").removeClass("guess").addClass("guessWrong");
    });
});

$(document).ready(function(){
    $("#guess4b").click(function(){
        $("#guess4b").removeClass("guess").addClass("guessRight");
    });
});

$(document).ready(function(){
    $("#guess4c").click(function(){
        $("#guess4c").removeClass("guess").addClass("guessWrong");
    });
});

$(document).ready(function(){
    $("#guess5a").click(function(){
        $("#guess5a").removeClass("guess").addClass("guessRight");
    });
});

$(document).ready(function(){
    $("#guess5b").click(function(){
        $("#guess5b").removeClass("guess").addClass("guessWrong");
    });
});

$(document).ready(function(){
    $("#guess5c").click(function(){
        $("#guess5c").removeClass("guess").addClass("guessWrong");
    });
});

$(document).ready(function(){
    $("#guess6a").click(function(){
        $("#guess6a").removeClass("guess").addClass("guessWrong");
    });
});

$(document).ready(function(){
    $("#guess6b").click(function(){
        $("#guess6b").removeClass("guess").addClass("guessWrong");
    });
});

$(document).ready(function(){
    $("#guess6c").click(function(){
        $("#guess6c").removeClass("guess").addClass("guessRight");
    });
});
