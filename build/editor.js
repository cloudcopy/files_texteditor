!function(e){var t=window.webpackJsonpTexteditor;window.webpackJsonpTexteditor=function(i,o,s){for(var r,a,l=0,d=[];l<i.length;l++)a=i[l],n[a]&&d.push(n[a][0]),n[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(t&&t(i,o,s);d.length;)d.shift()()};var i={},n={30:0};function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=n[e];if(0===t)return new Promise(function(e){e()});if(t)return t[2];var i=new Promise(function(i,o){t=n[e]=[i,o]});t[2]=i;var s=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.async=!0,r.timeout=12e4,o.nc&&r.setAttribute("nonce",o.nc),r.src=o.p+""+({1:"markdown-mode",2:"php-mode",3:"html-mode",4:"svg-mode",5:"xml-mode",6:"scala-mode",7:"lua-mode",8:"json-mode",9:"js-mode",10:"java-mode",11:"groovy-mode",12:"css-mode",13:"coffee-mode",14:"ace",15:"textile-mode",16:"sql-mode",17:"sh-mode",18:"scss-mode",19:"scad-mode",20:"rb-mode",21:"py-mode",22:"ps1-mode",23:"pl-mode",24:"ml-mode",25:"less-mode",26:"latex-mode",27:"cs-mode",28:"h-mode",29:"bat-mode"}[e]||e)+".bundle.js";var a=setTimeout(l,12e4);function l(){r.onerror=r.onload=null,clearTimeout(a);var t=n[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),n[e]=void 0)}return r.onerror=r.onload=l,s.appendChild(r),i},o.m=e,o.c=i,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e},o(o.s="./js/index.js")}({"./js/ImportAce.js":function(e,t,i){"use strict";
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */t.a=function(){return i.e(14).then(i.bind(null,"./node_modules/brace/index.js"))}},"./js/SyntaxMode.js":function(e,t,i){"use strict";t.a=function(e){var t=n[e];if(t)return o[t]().then(function(){return t});return $.when()};var n={bat:"batchfile",cmd:"batchfile",h:"c_cpp",c:"c_cpp",clj:"clojure",coffee:"coffee",cpp:"c_cpp",cs:"csharp",css:"css",groovy:"groovy",htm:"html",html:"html",tt:"html",java:"java",js:"javascript",jsm:"javascript",json:"json",latex:"latex",tex:"latex",less:"less",ly:"latex",ily:"latex",lua:"lua",markdown:"markdown",md:"markdown",mdown:"markdown",mdwn:"markdown",mkd:"markdown",ml:"ocaml",mli:"ocaml",pl:"perl",php:"php",ps1:"powershell",py:"python",rb:"ruby",scad:"scad",scala:"scala",scss:"scss",sh:"sh",sql:"sql",svg:"svg",textile:"textile",xml:"xml"},o={};o.batchfile=function(){return i.e(29).then(i.bind(null,"./node_modules/brace/mode/batchfile.js"))},o.c_cpp=function(){return i.e(28).then(i.bind(null,"./node_modules/brace/mode/c_cpp.js"))},o.coffee=function(){return i.e(13).then(i.bind(null,"./node_modules/brace/mode/coffee.js"))},o.cs=function(){return i.e(27).then(i.bind(null,"./node_modules/brace/mode/csharp.js"))},o.css=function(){return i.e(12).then(i.bind(null,"./node_modules/brace/mode/css.js"))},o.groovy=function(){return i.e(11).then(i.bind(null,"./node_modules/brace/mode/groovy.js"))},o.html=function(){return i.e(3).then(i.bind(null,"./node_modules/brace/mode/html.js"))},o.java=function(){return i.e(10).then(i.bind(null,"./node_modules/brace/mode/java.js"))},o.javascript=function(){return i.e(9).then(i.bind(null,"./node_modules/brace/mode/javascript.js"))},o.json=function(){return i.e(8).then(i.bind(null,"./node_modules/brace/mode/json.js"))},o.latex=function(){return i.e(26).then(i.bind(null,"./node_modules/brace/mode/latex.js"))},o.less=function(){return i.e(25).then(i.bind(null,"./node_modules/brace/mode/less.js"))},o.lua=function(){return i.e(7).then(i.bind(null,"./node_modules/brace/mode/lua.js"))},o.markdown=function(){return i.e(1).then(i.bind(null,"./node_modules/brace/mode/markdown.js"))},o.ocaml=function(){return i.e(24).then(i.bind(null,"./node_modules/brace/mode/ocaml.js"))},o.perl=function(){return i.e(23).then(i.bind(null,"./node_modules/brace/mode/perl.js"))},o.php=function(){return i.e(2).then(i.bind(null,"./node_modules/brace/mode/php.js"))},o.powershell=function(){return i.e(22).then(i.bind(null,"./node_modules/brace/mode/powershell.js"))},o.python=function(){return i.e(21).then(i.bind(null,"./node_modules/brace/mode/python.js"))},o.ruby=function(){return i.e(20).then(i.bind(null,"./node_modules/brace/mode/ruby.js"))},o.scad=function(){return i.e(19).then(i.bind(null,"./node_modules/brace/mode/scad.js"))},o.scala=function(){return i.e(6).then(i.bind(null,"./node_modules/brace/mode/scala.js"))},o.scss=function(){return i.e(18).then(i.bind(null,"./node_modules/brace/mode/scss.js"))},o.sh=function(){return i.e(17).then(i.bind(null,"./node_modules/brace/mode/sh.js"))},o.sql=function(){return i.e(16).then(i.bind(null,"./node_modules/brace/mode/sql.js"))},o.svg=function(){return i.e(4).then(i.bind(null,"./node_modules/brace/mode/svg.js"))},o.textile=function(){return i.e(15).then(i.bind(null,"./node_modules/brace/mode/textile.js"))},o.xml=function(){return i.e(5).then(i.bind(null,"./node_modules/brace/mode/xml.js"))}},"./js/editor.js":function(e,i,n){"use strict";n.d(i,"a",function(){return l});var o=n("./js/SyntaxMode.js"),s=n("./js/ImportAce.js"),r=n("./js/supported_mimetypes.json"),a=void 0,l={$container:null,editor:"editor",file:{edited:!1,mtime:null,dir:null,name:null,writeable:null,mime:null,size:null},saving:!1,currentContext:null,saveTimer:null,oldTitle:null,saveMessageTimeout:null,previewPlugins:{},registerPreviewPlugin:function(e,t){this.previewPlugins[e]=t},previewPluginsLoaded:{},preview:null,previewPluginOnChange:null,_onSaveTrigger:function(){if(l.file.edited&&!l.saving){l.saving=!0,l.file.edited=!1,clearTimeout(l.saveMessageTimeout);var e=$("#editor_controls").find("small.saving-message");e.text(t("files_texteditor","saving...")).show(),l.saveFile(window.aceEditor.getSession().getValue(),l.file,function(i){0==l.file.edited&&(document.title=l.file.name+" - "+l.oldTitle,$("small.unsaved-star").css("display","none")),l.file.mtime=i.mtime,l.file.size=i.size,e.text(t("files_texteditor","saved!")),l.saveMessageTimeout=setTimeout(function(){$("small.saving-message").fadeOut(200)},2e3)},function(e){void 0===e?$("small.saving-message").text(t("files_texteditor","failed!")):$("small.saving-message").text(e),l.saveMessageTimeout=setTimeout(function(){$("small.saving-message").fadeOut(200)},5e3),l.file.edited=!0}),l.saving=!1,window.aceEditor.focus()}},_onCloseTrigger:function(){l.file.edited?(l.file.edited=!1,l.hideEditor(),l.saveFile(window.aceEditor.getSession().getValue(),l.file,function(){OC.Notification.showTemporary(t("files_texteditor","Saved")),l.closeEditor()},function(){OC.Notification.showTemporary(t("files_texteditor","There was a problem saving your changes. Click to resume editing.")),$("#notification").data("reopeneditor",!0).on("click",l._onReOpenTrigger),l.file.edited=!0})):l.closeEditor()},_onReOpenTrigger:function(){1==$("#notification").data("reopeneditor")&&(document.title=l.file.name+" - "+l.oldTitle,l.$container.show())},_onEditorTrigger:function(e,t){var i=this;this.currentContext=t,this.file.name=e,this.file.dir=t.dir,this.fileList=t.fileList,Object(s.a)().then(function(n){a=n,i.loadEditor(l.$container,l.file),history.pushState({file:e,dir:t.dir},"Editor","#editor")})},_onEdit:function(){if(l.file.edited||(l.file.edited=!0,l.saving||l._onUnsaved()),this.previewPluginOnChange){var e=window.aceEditor.getSession().getValue();this.previewPluginOnChange(e,this.preview)}},_onUnsaved:function(){document.title="* "+l.file.name+" - "+l.oldTitle,$("small.unsaved-star").css("display","inline-block")},initialize:function(e){$("#content.app-files").length&&(this.$container=e,this.registerFileActions(),this.oldTitle=document.title)},registerFileActions:function(){var e=this;r.forEach(function(i){OCA.Files.fileActions.registerAction({name:"edit_texteditor",displayName:t("files_texteditor","Edit in plain text editor"),mime:i,actionHandler:e._onEditorTrigger.bind(e),permissions:OC.PERMISSION_READ,iconClass:"icon-edit"}),OCA.Files.fileActions.setDefault(i,"edit_texteditor")})},loadEditor:function(e,i){var n=this;e.html('<div id="editor_overlay"></div><div id="editor_container" class="icon-loading"><div id="editor_wrap"><div id="editor"></div><div id="preview_wrap"><div id="preview"></div></div></div></div>'),$("#content").append(e),this.loadFile(i.dir,i.name,function(t,i){if(document.title=t.name+" - "+l.oldTitle,$("#"+n.editor).text(i),$("#editor_container").removeClass("icon-loading"),n.configureACE(t),n.loadControlBar(t),window.aceEditor.getSession().on("change",n.setupAutosave),n.bindVisibleActions(),window.aceEditor.focus(),n.previewPlugins[t.mime]){n.preview=e.find("#preview"),n.preview.addClass(t.mime.replace("/","-")),e.find("#editor_container").addClass("hasPreview"),n.previewPluginOnChange=_.debounce(function(e,i){n.loadPreviewPlugin(t.mime).then(function(){n.previewPlugins[t.mime].preview(e,i)})},200);var o=window.aceEditor.getSession().getValue();n.previewPluginOnChange(o,n.preview),setTimeout(function(){window.aceEditor.resize()},500),n.loadPreviewControlBar()}else n.previewPluginOnChange=null},function(e){OC.dialogs.alert(e,t("files_texteditor","An error occurred!")),n.closeEditor()})},loadPreviewPlugin:function(e){if(this.previewPluginsLoaded[e])return $.Deferred().resolve().promise();this.previewPluginsLoaded[e]=!0;var t=this.previewPlugins[e];return $.when(t.init())},loadControlBar:function(e){var t='<small class="filename">'+escapeHTML(e.name)+'</small><small class="unsaved-star" style="display: none">*</small><small class="saving-message"></small><button id="editor_close" class="icon-close svg"></button>',i=$('<div id="editor_controls"></div>').html(t);$("#editor_wrap").before(i),this.setFilenameMaxLength(),this.bindControlBar()},setPreviewMode:function(e){var t=$("#app-content-texteditor"),i=$("#preview_editor_controls");switch(i.find("button").removeClass("active"),i.find('button[data-type="'+e+'"]').addClass("active"),e){case"mixed":t.find("#editor_container").addClass("hasPreview"),t.find("#editor_container").removeClass("onlyPreview");break;case"text":t.find("#editor_container").removeClass("hasPreview"),t.find("#editor_container").removeClass("onlyPreview");break;case"image":t.find("#editor_container").addClass("hasPreview"),t.find("#editor_container").addClass("onlyPreview")}setTimeout(function(){window.aceEditor.resize()},500)},loadPreviewControlBar:function(){var e=function(e,t,i){var n=$("<button/>");return n.tooltip({title:t,container:"body",placement:"bottom",delay:{show:500,hide:0}}),i&&n.addClass("active"),n.click(this.setPreviewMode.bind(this,e)),n.attr("data-type",e),n.css("background-image",'url("'+OC.imagePath("files_texteditor",e)+'")')}.bind(this),i=$("<span/>").attr("id","preview_editor_controls");i.append(e("text",t("files_texteditor","Edit"))),i.append(e("mixed",t("files_texteditor","Mixed"),!0)),i.append(e("image",t("files_texteditor","Preview"))),$("#editor_close").after(i)},unloadControlBar:function(){$("#editor_controls").remove()},setFilenameMaxLength:function(){var e=$("#editor_controls").width(),t=$("small.saving-message").outerWidth(!0);t+=$("small.unsaved-star").outerWidth(!0),t+=$("#editor_close").outerWidth(!0),$("small.filename").css("max-width",e-t-28)},bindControlBar:function(){$("#editor_close").on("click",_.bind(this._onCloseTrigger,this)),$(window).resize(l.setFilenameMaxLength),window.onpopstate=function(){"editor"!==location.hash.substr(1).substr(0,6)&&this._onCloseTrigger()}.bind(this)},configureACE:function(e){window.aceEditor=a.edit(this.editor),aceEditor.getSession().setNewLineMode("windows"),aceEditor.setShowPrintMargin(!1),aceEditor.getSession().setUseWrapMode(!0),e.writeable||aceEditor.setReadOnly(!0),e.mime&&"text/html"===e.mime?this.setEditorSyntaxMode("html"):this.setEditorSyntaxMode(e.name.split(".")[e.name.split(".").length-1]),n.e(0).then(n.bind(null,"./node_modules/brace/theme/clouds.js")).then(function(){window.aceEditor.setTheme("ace/theme/clouds")}),window.aceEditor.getSession().on("change",this._onEdit.bind(this)),window.aceEditor.commands.addCommand({name:"save",bindKey:{win:"Ctrl-S",mac:"Command-S",sender:"editor"},exec:l._onSaveTrigger}),window.aceEditor.commands.removeCommand(window.aceEditor.commands.byName.transposeletters)},setEditorSyntaxMode:function(e){Object(o.a)(e).then(function(e){e&&window.aceEditor.getSession().setMode("ace/mode/"+e)})},loadFile:function(e,t,i,n){$.get(OC.generateUrl("/apps/files_texteditor/ajax/loadfile"),{filename:t,dir:e}).done(function(e){l.file.writeable=e.writeable,l.file.mime=e.mime,l.file.mtime=e.mtime,i(l.file,e.filecontents)}).fail(function(e){n(JSON.parse(e.responseText).message)})},saveFile:function(e,t,i,n){var o=t.dir+t.name;"/"!==t.dir&&(o=t.dir+"/"+t.name),$.ajax({type:"PUT",url:OC.generateUrl("/apps/files_texteditor/ajax/savefile"),data:{filecontents:e,path:o,mtime:t.mtime}}).done(i).fail(function(e){var t;try{t=JSON.parse(e.responseText).message}catch(e){}n(t)})},closeEditor:function(){this.$container.html("").show(),this.unloadControlBar(),this.unBindVisibleActions();var e=this.fileList.getModelForFile(this.file.name);e&&e.set({etag:e.get("id")+this.file.mtime,mtime:1e3*this.file.mtime,size:this.file.size}),document.title=this.oldTitle},hideEditor:function(){this.$container.hide(),document.title=this.oldTitle,this.unBindVisibleActions()},setupAutosave:function(){clearTimeout(this.saveTimer),this.saveTimer=setTimeout(l._onSaveTrigger,3e3)},_onClickDocument:function(e){$(e.target).closest("#editor_container").length||$(e.target).closest(".oc-dialog").length||l._onCloseTrigger()},bindVisibleActions:function(){$(document).bind("click",this._onClickDocument)},unBindVisibleActions:function(){$(document).unbind("click",this._onClickDocument)}}},"./js/index.js":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("./js/sidebarpreview.js"),o=i("./js/editor.js"),s=i("./js/newfileplugin.js");i.p=OC.filePath("files_texteditor","js","../build/");var r=document.querySelector("[nonce]");i.nc=r.nonce||r.getAttribute("nonce"),OCA.Files_Texteditor=o.a,OC.Plugins.register("OCA.Files.NewFileMenu",s.a),OC.Plugins.register("OCA.Files.SidebarPreviewManager",new n.a),$(document).ready(function(){$("#editor").remove(),OCA.Files_Texteditor.initialize($('<div id="app-content-texteditor"></div>'))})},"./js/newfileplugin.js":function(e,i,n){"use strict";n.d(i,"a",function(){return o});var o={attach:function(e){var i=e.fileList;void 0===OCA.Text&&"files"===i.id&&e.addMenuEntry({id:"file",displayName:t("files_texteditor","New text file"),templateName:t("files_texteditor","New text file.txt"),iconClass:"icon-filetype-text",fileType:"file",actionHandler:function(e){var t=i.getCurrentDirectory();i.createFile(e).then(function(){OCA.Files_Texteditor._onEditorTrigger(e,{fileList:i,dir:t})})}})}}},"./js/sidebarpreview.js":function(e,t,i){"use strict";i.d(t,"a",function(){return a});var n=i("./js/SyntaxMode.js"),o=i("./js/ImportAce.js"),s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();var r=i("./js/supported_mimetypes.json"),a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return s(e,[{key:"attach",value:function(e){var t=this.handlePreview.bind(this);r.forEach(function(i){return e.addPreviewHandler(i,t)})}},{key:"handlePreview",value:function(e,t,s,r){var a=s.parent().width()+50,l=a/(16/9);this.getFileContent(e.getFullPath()).then(function(r){r=r.filecontents,t.removeClass("icon-loading icon-32"),s.addClass("large"),s.addClass("text");var d=$("<div id='sidebar_editor'/>");d.text(r),t.children(".stretcher").remove(),t.append(d),Object(o.a)().then(function(t){var o=t.edit("sidebar_editor");o.setReadOnly(!0);("text/html"===e.get("mimetype")?Object(n.a)("html"):Object(n.a)(e.get("name").split(".")[e.get("name").split(".").length-1])).then(function(e){e&&o.getSession().setMode("ace/mode/"+e)}),i.e(0).then(i.bind(null,"./node_modules/brace/theme/clouds.js")).then(function(){o.setTheme("ace/theme/clouds")}),d.css("height",l),d.css("width",a)})},function(){r()})}},{key:"getFileContent",value:function(e){var t=e.split("/"),i=t.slice(0,-1).join(""),n=t.slice(-1).join("");return $.ajax({url:OC.generateUrl("/apps/files_texteditor/ajax/loadfile"),data:{filename:n,dir:i},headers:{Range:"bytes=0-10240"}})}}]),e}()},"./js/supported_mimetypes.json":function(e,t){e.exports=["text","application/cmd","application/javascript","application/json","application/xml","application/x-empty","application/x-msdos-program","application/x-php","application/x-pearl","application/x-text","application/yaml"]}});
//# sourceMappingURL=editor.js.map