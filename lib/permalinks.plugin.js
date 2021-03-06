var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
module.exports = function(BasePlugin) {
  var Permalinks;
  return Permalinks = (function() {
    __extends(Permalinks, BasePlugin);
    function Permalinks() {
      Permalinks.__super__.constructor.apply(this, arguments);
    }
    Permalinks.prototype.name = 'permalinks';
    Permalinks.prototype.createPermalinkUrl = function(document) {
      var meta, permalink;
      meta = document.getMeta();
      if ((permalink = meta.get('permalink'))) {
        document.setUrl(permalink);
      }
      return document;
    };
    Permalinks.prototype.extendCollections = function(opts) {
      var database, docpad;
      docpad = this.docpad;
      database = docpad.getCollection('html');
      docpad.log('debug', 'Applying permalink');
      database.on('add change', this.createPermalinkUrl);
      docpad.log('debug', 'Applied permalink');
      return true;
    };
    return Permalinks;
  })();
};