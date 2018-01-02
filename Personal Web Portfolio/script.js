$(document).ready(function() {
    $('.slide-section').click(function(e){
    
    var linkHref = $(this).attr('href'); // get the id
    
    $('html, body').animate({
        scrollTop: $(linkHref).offset().top
    });
        
    e.preventDefault();
    });
});


function myFunction() {
    var myCollection = document.getElementsByClassName("project-extra-images");
    for (i = 0; i < myCollection.length; i++) {
        if (myCollection[i].style.display === "none") {
        myCollection[i].style.display = "block";
        } else {
        myCollection[i].style.display = "none";
        }   
    }
    
}
