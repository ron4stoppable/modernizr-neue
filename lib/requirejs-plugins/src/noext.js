define(function(){var QUERY_PARAM="noext";return{load:function(name,req,onLoad,config){req([req.toUrl(name)],function(mod){onLoad(mod)})},normalize:function(name,norm){return name+=name.indexOf("?")<0?"?":"&",name+QUERY_PARAM+"=1"}}});
//# sourceMappingURL=noext.js.map
