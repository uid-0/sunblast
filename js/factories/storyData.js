sunblast.factory('storyData', function() {
	var el = $("tw-storydata");
	var data = {
		el: el,
		name: el.attr('name'),
		startPassage: parseInt(el.attr('startnode')),
		creator: el.attr('creator'),
		creatorVersion: el.attr('creator-version'),
		passages: [],
		resolvePassage: function(selector) {
			var passage = null;
			angular.forEach(this.passages, function(val) {
				var id = parseInt(selector);

				if ( val.id == id ) {
					passage = val;
				}

				if (typeof selector === 'string' && val.name.trim() == selector.trim()) {
					console.log("returning passage by string");
					passage = val;
				}
			});
			return passage;
		}
	}

	var p = data.passages;

	el.children('tw-passagedata').each(function (el)
	{
		var $t = $(this);
		var id = parseInt($t.attr('pid'));
		var tags = $t.attr('tags');

		p[id] = new Passage(id, $t.attr('name'), (tags !== '' && tags !== undefined) ? tags.split(' ') : [], $t.html());
	});

	return data;
})
