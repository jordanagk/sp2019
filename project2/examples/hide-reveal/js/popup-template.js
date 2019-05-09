
//************************ Kaline Button ********************

$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#kaline-button').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#kaline-modal").toggleClass("visible");
        $(".modal").toggleClass("visible");
        });
});

$(document).ready(function (){
    $('#kaline-close').click(function() {
        $("#kaline-modal").toggleClass("visible")
        $(".modal").toggleClass("visible");
        });
});



//************************ Trammell Button *****************

$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#trammell-button').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#trammell-modal").toggleClass("visible");
        $(".modal").toggleClass("visible");
        });
});

$(document).ready(function (){
    $('#trammell-close').click(function() {
        $("#trammell-modal").toggleClass("visible")
        $(".modal").toggleClass("visible");
        });
});



//************************ Inge Button *****************

$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#inge-button').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#inge-modal").toggleClass("visible");
        $(".modal").toggleClass("visible");
        });
});

$(document).ready(function (){
    $('#inge-close').click(function() {
        $("#inge-modal").toggleClass("visible")
        $(".modal").toggleClass("visible");
        });
});





















//************************ Templates ************************

// Button to open a modal
$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#place-button-name-here').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#place-modal-name-here").toggleClass("visible");
        });
});

// Button to close a modal
$(document).ready(function (){
    $('#place-modal_close-icon-name-here').click(function() {
        $("#place-modal-name-here").toggleClass("visible")
        });
});