!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([,,,,,,,,,,function(e,t,n){"use strict";n.r(t);n(11),n(12),n(13),n(14),n(15),n(16),n(17)},function(e,n){!function(e){e.SystemTags={getDescriptiveTag:function(e){if(_.isUndefined(e.name)&&!_.isUndefined(e.toJSON)&&(e=e.toJSON()),_.isUndefined(e.name))return $("<span>").addClass("non-existing-tag").text(t("core","Non-existing tag #{tag}",{tag:e}));var n,s=$("<span>");if(s.append(escapeHTML(e.name)),e.userAssignable||(n=t("core","restricted")),e.userVisible||(n=t("core","invisible")),n){var i=$("<em>").text(" "+t("core","({scope})",{scope:n}));s.append(i)}return s}}}(OC)},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s,i;s=Handlebars.template,(i=OC.SystemTags.Templates=OC.SystemTags.Templates||{}).result=s({1:function(e,t,n,s,i){return" new-item"},3:function(e,t,n,s,i){var a,l;return'\t\t<span class="label">'+(null!=(a="function"==typeof(l=null!=(l=n.tagMarkup||(null!=t?t.tagMarkup:t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"tagMarkup",hash:{},data:i}):l)?a:"")+"</span>\n"},5:function(e,t,n,s,i){var a;return'\t\t<span class="label">'+e.escapeExpression("function"==typeof(a=null!=(a=n.name||(null!=t?t.name:t))?a:e.hooks.helperMissing)?a.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:i}):a)+"</span>\n"},7:function(e,t,n,s,i){var a;return'\t\t<span class="systemtags-actions">\n\t\t\t<a href="#" class="rename icon icon-rename" title="'+e.escapeExpression("function"==typeof(a=null!=(a=n.renameTooltip||(null!=t?t.renameTooltip:t))?a:e.hooks.helperMissing)?a.call(null!=t?t:e.nullContext||{},{name:"renameTooltip",hash:{},data:i}):a)+'"></a>\n\t\t</span>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,s,i,a){var l,o,r,c=null!=t?t:e.nullContext||{},u=e.hooks.helperMissing,d='<span class="systemtags-item'+(null!=(l=s.if.call(c,null!=t?t.isNew:t,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?l:"")+'" data-id="'+e.escapeExpression("function"===n(o=null!=(o=s.id||(null!=t?t.id:t))?o:u)?o.call(c,{name:"id",hash:{},data:a}):o)+'">\n<span class="checkmark icon icon-checkmark"></span>\n'+(null!=(l=s.if.call(c,null!=t?t.isAdmin:t,{name:"if",hash:{},fn:e.program(3,a,0),inverse:e.program(5,a,0),data:a}))?l:"");return o=null!=(o=s.allowActions||(null!=t?t.allowActions:t))?o:u,r={name:"allowActions",hash:{},fn:e.program(7,a,0),inverse:e.noop,data:a},l="function"===n(o)?o.call(c,r):o,s.allowActions||(l=e.hooks.blockHelperMissing.call(t,l,r)),null!=l&&(d+=l),d+"</span>\n"},useData:!0}),i.result_form=s({1:function(e,t,n,s,i){var a;return'\t\t<a href="#" class="delete icon icon-delete" title="'+e.escapeExpression("function"==typeof(a=null!=(a=n.deleteTooltip||(null!=t?t.deleteTooltip:t))?a:e.hooks.helperMissing)?a.call(null!=t?t:e.nullContext||{},{name:"deleteTooltip",hash:{},data:i}):a)+'"></a>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,s,i,a){var l,o,r=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,u=e.escapeExpression;return'<form class="systemtags-rename-form">\n\t <label class="hidden-visually" for="'+u("function"===n(o=null!=(o=s.cid||(null!=t?t.cid:t))?o:c)?o.call(r,{name:"cid",hash:{},data:a}):o)+'-rename-input">'+u("function"===n(o=null!=(o=s.renameLabel||(null!=t?t.renameLabel:t))?o:c)?o.call(r,{name:"renameLabel",hash:{},data:a}):o)+'</label>\n\t<input id="'+u("function"===n(o=null!=(o=s.cid||(null!=t?t.cid:t))?o:c)?o.call(r,{name:"cid",hash:{},data:a}):o)+'-rename-input" type="text" value="'+u("function"===n(o=null!=(o=s.name||(null!=t?t.name:t))?o:c)?o.call(r,{name:"name",hash:{},data:a}):o)+'">\n'+(null!=(l=s.if.call(r,null!=t?t.isAdmin:t,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?l:"")+"</form>\n"},useData:!0}),i.selection=s({1:function(e,t,n,s,i){var a,l;return'\t<span class="label">'+(null!=(a="function"==typeof(l=null!=(l=n.tagMarkup||(null!=t?t.tagMarkup:t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"tagMarkup",hash:{},data:i}):l)?a:"")+"</span>\n"},3:function(e,t,n,s,i){var a;return'\t<span class="label">'+e.escapeExpression("function"==typeof(a=null!=(a=n.name||(null!=t?t.name:t))?a:e.hooks.helperMissing)?a.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:i}):a)+"</span>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,s,i){var a;return null!=(a=n.if.call(null!=t?t:e.nullContext||{},null!=t?t.isAdmin:t,{name:"if",hash:{},fn:e.program(1,i,0),inverse:e.program(3,i,0),data:i}))?a:""},useData:!0})},function(e,t){!function(e){_.extend(e.Files.Client,{PROPERTY_FILEID:"{"+e.Files.Client.NS_OWNCLOUD+"}id",PROPERTY_CAN_ASSIGN:"{"+e.Files.Client.NS_OWNCLOUD+"}can-assign",PROPERTY_DISPLAYNAME:"{"+e.Files.Client.NS_OWNCLOUD+"}display-name",PROPERTY_USERVISIBLE:"{"+e.Files.Client.NS_OWNCLOUD+"}user-visible",PROPERTY_USERASSIGNABLE:"{"+e.Files.Client.NS_OWNCLOUD+"}user-assignable"});var t=e.Backbone.Model.extend({sync:e.Backbone.davSync,defaults:{userVisible:!0,userAssignable:!0,canAssign:!0},davProperties:{id:e.Files.Client.PROPERTY_FILEID,name:e.Files.Client.PROPERTY_DISPLAYNAME,userVisible:e.Files.Client.PROPERTY_USERVISIBLE,userAssignable:e.Files.Client.PROPERTY_USERASSIGNABLE,canAssign:e.Files.Client.PROPERTY_CAN_ASSIGN},parse:function(e){return{id:e.id,name:e.name,userVisible:!0===e.userVisible||"true"===e.userVisible,userAssignable:!0===e.userAssignable||"true"===e.userAssignable,canAssign:!0===e.canAssign||"true"===e.canAssign}}});e.SystemTags=e.SystemTags||{},e.SystemTags.SystemTagModel=t}(OC)},function(e,t){!function(e){var t=e.Backbone.Collection.extend({sync:e.Backbone.davSync,usePUT:!0,_objectId:null,_objectType:"files",model:e.SystemTags.SystemTagModel,url:function(){return e.linkToRemote("dav")+"/systemtags-relations/"+this._objectType+"/"+this._objectId},setObjectId:function(e){this._objectId=e},setObjectType:function(e){this._objectType=e},initialize:function(e,t){t=t||{},_.isUndefined(t.objectId)||(this._objectId=t.objectId),_.isUndefined(t.objectType)||(this._objectType=t.objectType)},getTagIds:function(){return this.map(function(e){return e.id})}});e.SystemTags=e.SystemTags||{},e.SystemTags.SystemTagsMappingCollection=t}(OC)},function(e,t){!function(e){var t=e.Backbone.Collection.extend({sync:e.Backbone.davSync,model:e.SystemTags.SystemTagModel,url:function(){return e.linkToRemote("dav")+"/systemtags/"},filterByName:function(e){return this.filter(function(t){return function(e,t){return e.get("name").substr(0,t.length).toLowerCase()===t.toLowerCase()}(t,e)})},reset:function(){return this.fetched=!1,e.Backbone.Collection.prototype.reset.apply(this,arguments)},fetch:function(t){var n=this;if(t=t||{},this.fetched||t.force)return t.success&&t.success(this,null,t),this.trigger("sync",this,null,t),Promise.resolve();var s=t.success;return(t=_.extend({},t)).success=function(){if(n.fetched=!0,s)return s.apply(this,arguments)},e.Backbone.Collection.prototype.fetch.call(this,t)}});e.SystemTags=e.SystemTags||{},e.SystemTags.SystemTagsCollection=t,e.SystemTags.collection=new e.SystemTags.SystemTagsCollection}(OC)},function(e,n){!function(e){var n=e.Backbone.View.extend({_rendered:!1,_newTag:null,_lastUsedTags:[],className:"systemTagsInputFieldContainer",template:function(e){return'<input class="systemTagsInputField" type="hidden" name="tags" value=""/>'},initialize:function(t){t=t||{},this._multiple=!!t.multiple,this._allowActions=_.isUndefined(t.allowActions)||!!t.allowActions,this._allowCreate=_.isUndefined(t.allowCreate)||!!t.allowCreate,this._isAdmin=!!t.isAdmin,_.isFunction(t.initSelection)&&(this._initSelection=t.initSelection),this.collection=t.collection||e.SystemTags.collection;var n=this;this.collection.on("change:name remove",function(){_.defer(n._refreshSelection)}),_.defer(_.bind(this._getLastUsedTags,this)),_.bindAll(this,"_refreshSelection","_onClickRenameTag","_onClickDeleteTag","_onSelectTag","_onDeselectTag","_onSubmitRenameTag")},_getLastUsedTags:function(){var t=this;$.ajax({type:"GET",url:e.generateUrl("/apps/systemtags/lastused"),success:function(e){t._lastUsedTags=e}})},_refreshSelection:function(){this.$tagsField.select2("val",this.$tagsField.val())},_onClickRenameTag:function(n){var s=$(n.target).closest(".systemtags-item"),i=s.attr("data-id"),a=this.collection.get(i).get("name"),l=$(e.SystemTags.Templates.result_form({cid:this.cid,name:a,deleteTooltip:t("core","Delete"),renameLabel:t("core","Rename"),isAdmin:this._isAdmin}));return s.find(".label").after(l),s.find(".label, .systemtags-actions").addClass("hidden"),s.closest(".select2-result").addClass("has-form"),l.find("[title]").tooltip({placement:"bottom",container:"body"}),l.find("input").focus().selectRange(0,a.length),!1},_onSubmitRenameTag:function(e){e.preventDefault();var t=$(e.target),n=t.closest(".systemtags-item"),s=n.attr("data-id"),i=this.collection.get(s),a=$(e.target).find("input").val().trim();a&&a!==i.get("name")&&(i.save({name:a}),n.find(".label").text(a)),n.find(".label, .systemtags-actions").removeClass("hidden"),t.remove(),n.closest(".select2-result").removeClass("has-form")},_onClickDeleteTag:function(e){var t=$(e.target).closest(".systemtags-item"),n=t.attr("data-id");return this.collection.get(n).destroy(),$(e.target).tooltip("hide"),t.closest(".select2-result").remove(),!1},_addToSelect2Selection:function(e){var t=this.$tagsField.select2("data");t.push(e),this.$tagsField.select2("data",t)},_onSelectTag:function(e){var t,n=this;if(e.object&&e.object.isNew)return t=this.collection.create({name:e.object.name.trim(),userVisible:!0,userAssignable:!0,canAssign:!0},{success:function(e){n._addToSelect2Selection(e.toJSON()),n._lastUsedTags.unshift(e.id),n.trigger("select",e)},error:function(t,s){409===s.status&&(n.collection.reset(),n.collection.fetch({success:function(t){var s=t.where({name:e.object.name.trim(),userVisible:!0,userAssignable:!0});s.length&&(s=s[0],n._addToSelect2Selection(s.toJSON()),n.trigger("select",s))}}))}}),this.$tagsField.select2("close"),e.preventDefault(),!1;t=this.collection.get(e.object.id),this._lastUsedTags.unshift(t.id),this._newTag=null,this.trigger("select",t)},_onDeselectTag:function(e){this.trigger("deselect",e.choice.id)},_queryTagsAutocomplete:function(e){var t=this;this.collection.fetch({success:function(n){var s=n.filterByName(e.term.trim());t._isAdmin||(s=_.filter(s,function(e){return e.get("canAssign")})),e.callback({results:_.invoke(s,"toJSON")})}})},_preventDefault:function(e){e.stopPropagation()},_formatDropDownResult:function(n){return e.SystemTags.Templates.result(_.extend({renameTooltip:t("core","Rename"),allowActions:this._allowActions,tagMarkup:this._isAdmin?e.SystemTags.getDescriptiveTag(n)[0].innerHTML:null,isAdmin:this._isAdmin},n))},_formatSelection:function(t){return e.SystemTags.Templates.selection(_.extend({tagMarkup:this._isAdmin?e.SystemTags.getDescriptiveTag(t)[0].innerHTML:null,isAdmin:this._isAdmin},t))},_createSearchChoice:function(e){if(e=e.trim(),!this.collection.filter(function(t){return t.get("name")===e}).length)return this._newTag?this._newTag.name=e:this._newTag={id:-1,name:e,userAssignable:!0,userVisible:!0,canAssign:!0,isNew:!0},this._newTag},_initSelection:function(e,t){var n=this,s=$(e).val().split(",");function i(e){var t=e.toJSON();return n._isAdmin||t.canAssign||(t.locked=!0),t}this.collection.fetch({success:function(){t(function(e){var t=n.collection.filter(function(t){return e.indexOf(t.id)>=0&&(n._isAdmin||t.get("userVisible"))});return _.map(t,i)}(s))}})},render:function(){var n=this;this.$el.html(this.template()),this.$el.find("[title]").tooltip({placement:"bottom"}),this.$tagsField=this.$el.find("[name=tags]"),this.$tagsField.select2({placeholder:t("core","Collaborative tags"),containerCssClass:"systemtags-select2-container",dropdownCssClass:"systemtags-select2-dropdown",closeOnSelect:!1,allowClear:!1,multiple:this._multiple,toggleSelect:this._multiple,query:_.bind(this._queryTagsAutocomplete,this),id:function(e){return e.id},initSelection:_.bind(this._initSelection,this),formatResult:_.bind(this._formatDropDownResult,this),formatSelection:_.bind(this._formatSelection,this),createSearchChoice:this._allowCreate?_.bind(this._createSearchChoice,this):void 0,sortResults:function(t){var s=_.pluck(n.$tagsField.select2("data"),"id");return t.sort(function(t,i){var a=s.indexOf(t.id)>=0,l=s.indexOf(i.id)>=0;if(a===l){var o=n._lastUsedTags.indexOf(t.id),r=n._lastUsedTags.indexOf(i.id);return o!==r?-1===r?-1:-1===o?1:o<r?-1:1:e.Util.naturalSortCompare(t.name,i.name)}return a&&!l?-1:1}),t},formatNoMatches:function(){return t("core","No tags found")}}).on("select2-selecting",this._onSelectTag).on("select2-removing",this._onDeselectTag);var s=this.$tagsField.select2("dropdown");s.on("mouseup",".rename",this._onClickRenameTag),s.on("mouseup",".delete",this._onClickDeleteTag),s.on("mouseup",".select2-result-selectable.has-form",this._preventDefault),s.on("submit",".systemtags-rename-form",this._onSubmitRenameTag),this.delegateEvents()},remove:function(){this.$tagsField&&this.$tagsField.select2("destroy")},getValues:function(){this.$tagsField.select2("val")},setValues:function(e){this.$tagsField.select2("val",e)},setData:function(e){this.$tagsField.select2("data",e)}});e.SystemTags=e.SystemTags||{},e.SystemTags.SystemTagsInputField=n}(OC)},function(e,t,n){var s=n(18);"string"==typeof s&&(s=[[e.i,s,""]]);var i={insert:"head",singleton:!1};n(20)(s,i);s.locals&&(e.exports=s.locals)},function(e,t,n){(e.exports=n(19)(!1)).push([e.i,".systemtags-select2-dropdown .select2-result-label .checkmark{visibility:hidden;margin-left:-5px;margin-right:5px;padding:4px}.systemtags-select2-dropdown .select2-result-label .new-item .systemtags-actions{display:none}.systemtags-select2-dropdown .select2-selected .select2-result-label .checkmark{visibility:visible}.systemtags-select2-dropdown .select2-result-label .icon{display:inline-block;opacity:.5}.systemtags-select2-dropdown .select2-result-label .icon.rename{padding:4px}.systemtags-select2-dropdown .systemtags-actions{position:absolute;right:5px}.systemtags-select2-dropdown .systemtags-rename-form{display:inline-block;width:calc(100% - 20px);top:-6px;position:relative}.systemtags-select2-dropdown .systemtags-rename-form input{display:inline-block;height:30px;width:calc(100% - 40px)}.systemtags-select2-dropdown .label{width:85%;display:inline-block;overflow:hidden;text-overflow:ellipsis}.systemtags-select2-dropdown .label.hidden{display:none}.systemtags-select2-dropdown span{line-height:25px}.systemtags-select2-dropdown .systemtags-item{display:inline-block;height:25px;width:100%}.systemtags-select2-dropdown .select2-result-label{height:25px}.systemtags-select2-container{width:100%}.systemtags-select2-container .select2-choices .select2-search-choice.select2-locked .label{opacity:0.5}#select2-drop.systemtags-select2-dropdown .select2-results li.select2-result{padding:5px}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",s=e[3];if(!s)return n;if(t&&"function"==typeof btoa){var i=(l=s,o=btoa(unescape(encodeURIComponent(JSON.stringify(l)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(r," */")),a=s.sources.map(function(e){return"/*# sourceURL=".concat(s.sourceRoot).concat(e," */")});return[n].concat(a).concat([i]).join("\n")}var l,o,r;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},i=0;i<this.length;i++){var a=this[i][0];null!=a&&(s[a]=!0)}for(var l=0;l<e.length;l++){var o=e[l];null!=o[0]&&s[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="(".concat(o[2],") and (").concat(n,")")),t.push(o))}},t}},function(e,t,n){"use strict";var s,i={},a=function(){return void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s},l=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function o(e,t){for(var n=[],s={},i=0;i<e.length;i++){var a=e[i],l=t.base?a[0]+t.base:a[0],o={css:a[1],media:a[2],sourceMap:a[3]};s[l]?s[l].parts.push(o):n.push(s[l]={id:l,parts:[o]})}return n}function r(e,t){for(var n=0;n<e.length;n++){var s=e[n],a=i[s.id],l=0;if(a){for(a.refs++;l<a.parts.length;l++)a.parts[l](s.parts[l]);for(;l<s.parts.length;l++)a.parts.push(h(s.parts[l],t))}else{for(var o=[];l<s.parts.length;l++)o.push(h(s.parts[l],t));i[s.id]={id:s.id,refs:1,parts:o}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var s=n.nc;s&&(e.attributes.nonce=s)}if(Object.keys(e.attributes).forEach(function(n){t.setAttribute(n,e.attributes[n])}),"function"==typeof e.insert)e.insert(t);else{var i=l(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,s){var i=n?"":s.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var a=document.createTextNode(i),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(a,l[t]):e.appendChild(a)}}function m(e,t,n){var s=n.css,i=n.media,a=n.sourceMap;if(i&&e.setAttribute("media",i),a&&btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var p=null,g=0;function h(e,t){var n,s,i;if(t.singleton){var a=g++;n=p||(p=c(t)),s=f.bind(null,n,a,!1),i=f.bind(null,n,a,!0)}else n=c(t),s=m.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=o(e,t);return r(n,t),function(e){for(var s=[],a=0;a<n.length;a++){var l=n[a],c=i[l.id];c&&(c.refs--,s.push(c))}e&&r(o(e,t),t);for(var u=0;u<s.length;u++){var d=s[u];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete i[d.id]}}}}}]);
//# sourceMappingURL=systemtags.js.map