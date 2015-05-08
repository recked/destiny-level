(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return (root.ghetto = root.$ = factory());
    });
  } else {
    root.ghetto = root.$ = factory();
  }
}(this, function() {
  var ghetto = function(sel, ctx) {
    return new ghetto.fn.init(sel, ctx);
  };

  var fn = ghetto.fn = ghetto.prototype = {
    length: 0
  };

  fn.init = function(sel, ctx) {
    if (!sel) {
      return this;
    }

    var context = ghetto(ctx)[0] || document;

    if (!context) {
      return this;
    }

    var nodes = Array.prototype.slice.call(context.querySelectorAll(sel));

    nodes.forEach(function(node, idx, c) {
      this[idx] = node;
    }.bind(this));

    this.context = context;
    this.length = nodes.length;

    return this;
  };

  fn.init.prototype = fn;

  return ghetto;
}));