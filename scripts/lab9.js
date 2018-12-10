// Yuri Sato
// 04094839
// Lab answers, some of the functions are commented because of the other code below
// the second function add a toggle to all buttons and some boostrap classes

$(document).ready(function( ) {

    // Question 2
    $("h1").text("Lab 9");

    // Question 3
    $("#header").html("<h3>Working with jQuery</h3>");

    // Question 4
    $("input[type=button]").each(function(){
        $(this).addClass("btn-background");
    });

    // Question 5
    $("#buttons").addClass('red-border');

    // Question 6
    $("p").each(function(){
        $(this).addClass('blue')
    });
    
    // //Question 7
    // $("#first").on("click",() =>{
    //     $("p:first").addClass("green-border");
    // });

    // // Question 8
    // $("#last").on("click",() =>{
    //     $("p:last").addClass("orange-border");
    // });    

    // // Question 9
    // $("#prev").on("click",() =>{
    //     $("#para3").prev().addClass("purple-border");
    // });

    // // Question 10
    // $("#next").on("click",() =>{
    //     $("#para2").next().addClass("yellow-border");
    // });

    // Question 10
    // $("#remove").on("click",() =>{
    //     $("#footer").remove();
    // });

});


//toggle function, add bootstrap class, reset buttom

$(document).ready(function(){
    // toogle function
    function toggle(target, style){
        if(target.hasClass(style)){
            target.removeClass(style);
        }else{
            target.addClass(style);
        }
    }
    // remove function
    function remove(element){
        if( $("#footer>span").text() === ''){
            element.val("remove");
            $("#footer>span").text("Find out more at jquery.com");
        }else{
           element.val("input again");
            $("#footer>span").empty();
        }

    }
    //Add toogle function to the buttons
    $("input[type=button]").each(function(){
        $(this).addClass("btn btn-primary");
    });
    $("#first").on("click",() =>{
        toggle($("p:first"), "green-border");
    });
    $("#last").on("click",() =>{
        toggle($("p:last"), "orange-border");
    });    
    $("#prev").on("click",() =>{
        toggle($("#para3").prev(), "purple-border");
    });
    $("#next").on("click",() =>{
        toggle($("#para2").next(), "yellow-border")
    });
    $("#remove").on("click",() =>{
        remove( $("#remove"))
    });
});


// function
function name(){
    
}