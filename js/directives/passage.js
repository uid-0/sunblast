sunblast.directive("passage", function(storyData, $compile) {
  return {
    restrict: "E",
    link: function(scope, element, attributes) {
      function update(id, scope) {
        var passage = storyData.resolvePassage(id);
        if (passage === null) {
          var tpl = "<h1>404 - Passage not found</h1><p>The passage you attempted to load does not exist. Please notify the author.</p><p>Reload the page to continue</p><pre>" + JSON.stringify(id) + "</pre>";
        } else {
          var tpl = passage.render();
        }
        element.append($compile(tpl)(scope));
      }
      scope.$watch("pid", function(newValue, oldValue, scope) {
        if (typeof newValue === 'undefined')
          return
        update(newValue, scope);
      })
      update(attributes.pid, scope);
    }
  };
});
