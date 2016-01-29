function EventEmitter() {
  this.emit = function(evt, data) {
    $(this).trigger(evt, data);
  };

  this.on = function(evt, handler) {
    $(this).on(evt, handler);
  };

  this.off = function(evt, handler) {
    $(this).off(evt, handler);
  };
}
