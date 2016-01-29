$(document).ready(function() {
	var el = $("tw-storydata");

	angular.forEach(el.children('*[type="text/twine-javascript"]'), function (el)
	{
		var script = document.createElement("script");
		script.text = $(el).html();

		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(script, s);
	});

	angular.forEach(el.children('*[type="text/twine-css"]'), function (el)
	{
		$("body").append("<" + "style type='text/css'>" + $(el).html() + "</" + "style>");
	});

	window.onerror = function() {
		$("body").append(JSON.stringify(arguments))
	}
	try{
		angular.bootstrap($("html"), ['sunblast', 'sunblastUserModule']);
	} catch (e) {
		$("body").append("Could not bootstrap sunblast, did you create a sunblastUserModule in code?");
	}
});
