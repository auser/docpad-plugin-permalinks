module.exports = (BasePlugin) ->
  class Permalinks extends BasePlugin

    name: 'permalinks'
    
    createPermalinkUrl: (document) ->
      meta = document.getMeta();
      
      if (permalink = meta.get('permalink'))
        document.setUrl(permalink);
        
      return document;
    
    extendCollections: (opts) ->
      docpad = @docpad
      database = docpad.getCollection('html')
      docpad.log('debug', 'Applying permalink')
      database.on('add change', @createPermalinkUrl)
      docpad.log('debug', 'Applied permalink')
      return true
      