$(document).ready(function(){
    $("#puzzle1").one("click", function(){
        $("#memorise1").text("Result").delay(3000).queue(function(next){
            $(this).text("Test");
            next();
        });
    });
});

$(document).ready(function(){
    $("#puzzle2").one("click", function(){
        $("#memorise2").text("Result").delay(2000).queue(function(next){
            $(this).text("Test");
            next();
        });
    });
});

$(document).ready(function(){
    $("#puzzle3").one("click", function(){
        $("#memorise3").text("Result").delay(1000).queue(function(next){
            $(this).text("Test");
            next();
        });
    });
});

$(document).ready(function(){
    $("#puzzle4").one("click", function(){
        $("#memorise4").text("Result").delay(500).queue(function(next){
            $(this).text("Test");
            next();
        });
    });
});

$(document).ready(function(){
    $("#puzzle5").one("click", function(){
        $("#memorise5").text("Result").delay(500).queue(function(next){
            $(this).text("Test");
            next();
        });
    });
});

$(document).ready(function(){
    $("#puzzle6").click(function(){
        $("#memorise6").text("Result").delay(500).queue(function(next){
            $(this).text("Test");
            next();
        });
    });
});