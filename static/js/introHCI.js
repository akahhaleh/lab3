'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(this).text("1+1=3");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	$("#submitBtn").click(updateProject); 
	$("a.thumbnail").click(projectClick);
	//$("#testjs").click(testButtonClick);


}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.fadeOut();
    }

    var media = $(containingProject).find("img");
    media.toggleClass("inactivePic")
}

/*
function testButtonClick (e) {
	// Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    var buttonText = $("#testjs");
    buttonText.text("1+1=3");
}
*/

function updateProject(e) {
   
   var selectedProject = $('#project').val();
   
   $(selectedProject).animate({
      width: $('#width').val()
   });

   var newDiscription = $('#description').val();
   $(selectedProject + " .project-description").text(newDiscription);
}
