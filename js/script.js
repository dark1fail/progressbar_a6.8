$(document).ready(function()
{
	var progress = 0;

	$("#1").click(function() 
	{
		console.log('кнопка 1%')
		progress++;
		if(progress >= 100)
		{
			progress = 0;
			alert("По новой :)");
		}
		$('.progress-bar').css("width", progress + "%").text(progress + "%");
	});

	$("#2").click(function()
	{
		console.log('кнопка 3%')
		progress += 3;
		if(progress >= 100)
		{
			progress = 0;
			alert("По новой :)");
		}
		$('.progress-bar').css("width", progress + "%").text(progress + "%");
	});

	$("#3").click(function()
	{
		console.log('кнопка 7%')
		progress += 7;
		if(progress >= 100)
		{
			progress = 0;
			alert("По новой :)");
		} 
		$('.progress-bar').css("width", progress + "%").text(progress + "%");
	});

});



// var progress = 0;




// setInterval(function()
// {
// 	if(progress > 100) progress = 0;
// 	$('.progress-bar').css("width", progress + "%").text(progress + "%");
// 	progress++;
// },50);