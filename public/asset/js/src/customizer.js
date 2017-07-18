window.onload=function(){"use strict";function showError(msg,err){throw $('<div id="bsCustomizerAlert" class="bs-customizer-alert"><div class="container"><a href="#bsCustomizerAlert" data-dismiss="alert" class="close pull-right" aria-label="Close" role="button"><span aria-hidden="true">&times;</span></a><p class="bs-customizer-alert-text"><span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span><span class="sr-only">Warning:</span>'+msg+"</p>"+(err.message?$("<p></p>").text("Error: "+err.message)[0].outerHTML:"")+(err.extract?$('<pre class="bs-customizer-alert-extract"></pre>').text(err.extract.join("\n"))[0].outerHTML:"")+"</div></div>").appendTo("body").alert(),err}function showSuccess(msg){$('<div class="bs-callout bs-callout-info"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+msg+"</div>").insertAfter(".bs-customize-download")}function showCallout(msg,showUpTop){var $callout=$('<div class="bs-callout bs-callout-danger"><h4>Attention!</h4><p>'+msg+"</p></div>");showUpTop?$callout.appendTo(".bs-docs-container"):$callout.insertAfter(".bs-customize-download")}function showAlert(type,msg,insertAfter){$('<div class="alert alert-'+type+'">'+msg+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>').insertAfter(insertAfter)}function getQueryParam(key){key=key.replace(/[*+?^$.\[\]{}()|\\\/]/g,"\\$&");var match=location.search.match(new RegExp("[?&]"+key+"=([^&]+)(&|$)"));return match&&decodeURIComponent(match[1].replace(/\+/g," "))}function createGist(configJson,callback){var data={description:"Bootstrap Customizer Config",public:!0,files:{"config.json":{content:configJson}}};$.ajax({url:"https://api.github.com/gists",type:"POST",contentType:"application/json; charset=UTF-8",dataType:"json",data:JSON.stringify(data)}).success(function(result){var gistUrl=result.html_url,customizerUrl=window.location.protocol+"//"+window.location.host+window.location.pathname+"?id="+result.id;showSuccess('<strong>Success!</strong> Your configuration has been saved to <a href="'+gistUrl+'">'+gistUrl+'</a> and can be revisited here at <a href="'+customizerUrl+'">'+customizerUrl+"</a> for further customization."),history.replaceState(!1,document.title,customizerUrl),callback(gistUrl,customizerUrl)}).error(function(err){try{showError("<strong>Ruh roh!</strong> Could not save gist file, configuration not saved.",err)}catch(sameErr){}callback("<none>","<none>")})}function getCustomizerData(){var vars={};$("#less-variables-section input").each(function(){$(this).val()&&(vars[$(this).prev().text()]=$(this).val())});var data={vars:vars,css:$("#less-section input:checked").map(function(){return this.value}).toArray(),js:$("#plugin-section input:checked").map(function(){return this.value}).toArray()};return!$.isEmptyObject(data.vars)||data.css.length||data.js.length?data:null}function updateCustomizerFromJson(data){if(data.js&&$("#plugin-section input").each(function(){$(this).prop("checked",~$.inArray(this.value,data.js))}),data.css&&$("#less-section input").each(function(){$(this).prop("checked",~$.inArray(this.value,data.css))}),data.vars)for(var i in data.vars)$('input[data-var="'+i+'"]').val(data.vars[i])}function generateZip(css,js,fonts,config,complete){if(!css&&!js)return showError("<strong>Ruh roh!</strong> No Bootstrap files selected.",new Error("no Bootstrap"));var zip=new JSZip;if(css){var cssFolder=zip.folder("css");for(var fileName in css)cssFolder.file(fileName,css[fileName])}if(js){var jsFolder=zip.folder("js");for(var jsFileName in js)jsFolder.file(jsFileName,js[jsFileName])}if(fonts){var fontsFolder=zip.folder("fonts");for(var fontsFileName in fonts)fontsFolder.file(fontsFileName,fonts[fontsFileName],{base64:!0})}config&&zip.file("config.json",config),complete(zip.generate({type:"blob"}))}function generateCustomLess(vars){var result="";for(var key in vars)result+=key+": "+vars[key]+";\n";return result+"\n\n"}function generateFonts(){if($('#less-section [value="glyphicons.less"]:checked').length)return __fonts}function includedLessFilenames(lessFilename){var IMPORT_REGEX=/^@import \"(.*?)\";$/,lessLines=__less[lessFilename].split("\n"),imports=[];return $.each(lessLines,function(index,lessLine){var match=IMPORT_REGEX.exec(lessLine);if(match){var importee=match[1],transitiveImports=includedLessFilenames(importee);$.each(transitiveImports,function(index,transitiveImportee){-1===$.inArray(transitiveImportee,imports)&&imports.push(transitiveImportee)}),imports.push(importee)}}),imports}function generateLESS(lessFilename,lessFileIncludes,vars){var lessSource=__less[lessFilename],lessFilenames=includedLessFilenames(lessFilename);return $.each(lessFilenames,function(index,filename){var fileInclude=lessFileIncludes[filename];(fileInclude||null==fileInclude)&&(lessSource+=__less[filename]),"variables.less"===filename&&vars&&(lessSource+=generateCustomLess(vars))}),lessSource=lessSource.replace(/@import[^\n]*/gi,"")}function compileLESS(lessSource,baseFilename,intoResult){var promise=$.Deferred();return new less.Parser({paths:["variables.less","mixins.less"],optimization:0,filename:baseFilename+".css"}).parse(lessSource,function(parseErr,tree){if(parseErr)return promise.reject(parseErr);try{intoResult[baseFilename+".css"]=cw+tree.toCSS(),intoResult[baseFilename+".min.css"]=cw+tree.toCSS({compress:!0})}catch(compileErr){return promise.reject(compileErr)}promise.resolve()}),promise.promise()}function generateCSS(preamble){var promise=$.Deferred(),oneChecked=!1,lessFileIncludes={};if($("#less-section input").each(function(){var $this=$(this),checked=$this.is(":checked");lessFileIncludes[$this.val()]=checked,oneChecked=oneChecked||checked}),!oneChecked)return!1;var result={},vars={};$("#less-variables-section input").each(function(){$(this).val()&&(vars[$(this).prev().text()]=$(this).val())});var bsLessSource=preamble+generateLESS("bootstrap.less",lessFileIncludes,vars),themeLessSource=preamble+generateLESS("theme.less",lessFileIncludes,vars),prefixer=autoprefixer({browsers:__configBridge.autoprefixerBrowsers});return $.when(compileLESS(bsLessSource,"bootstrap",result),compileLESS(themeLessSource,"bootstrap-theme",result)).done(function(){for(var key in result)result[key]=prefixer.process(result[key]).css;promise.resolve(result)}).fail(function(err){showError("<strong>Ruh roh!</strong> Problem parsing or compiling Less files.",err),promise.reject()}),promise.promise()}function uglify(js){var ast=UglifyJS.parse(js);ast.figure_out_scope();var compressor=UglifyJS.Compressor(),compressedAst=ast.transform(compressor);compressedAst.figure_out_scope(),compressedAst.compute_char_frequency(),compressedAst.mangle_names();var stream=UglifyJS.OutputStream();return compressedAst.print(stream),stream.toString()}function generateJS(preamble){var $checked=$("#plugin-section input:checked"),jqueryCheck=__configBridge.jqueryCheck.join("\n"),jqueryVersionCheck=__configBridge.jqueryVersionCheck.join("\n");if(!$checked.length)return!1;var js=$checked.map(function(){return __js[this.value]}).toArray().join("\n");return preamble=cw+preamble,js=jqueryCheck+jqueryVersionCheck+js,{"bootstrap.js":preamble+js,"bootstrap.min.js":preamble+uglify(js)}}function removeImportAlerts(){$importDropTarget.nextAll(".alert").remove()}function handleConfigFileSelect(e){e.stopPropagation(),e.preventDefault();var file=e.originalEvent.hasOwnProperty("dataTransfer")?e.originalEvent.dataTransfer.files[0]:e.originalEvent.target.files[0],reader=new FileReader;reader.onload=function(e){var text=e.target.result;try{var json=JSON.parse(text);if(!$.isPlainObject(json))throw new Error("JSON data from config file is not an object.");updateCustomizerFromJson(json),showAlert("success","<strong>Woohoo!</strong> Your configuration was successfully uploaded. Tweak your settings, then hit Download.",$importDropTarget)}catch(err){return showAlert("danger","<strong>Shucks.</strong> We can only read valid <code>.json</code> files. Please try again.",$importDropTarget)}},reader.readAsText(file,"utf-8")}var cw="/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-"+(new Date).getFullYear()+" Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n\n",supportsFile=window.File&&window.FileReader&&window.FileList&&window.Blob,$importDropTarget=$("#import-drop-target");supportsFile&&$importDropTarget.on("dragover",function(e){e.stopPropagation(),e.preventDefault(),e.originalEvent.dataTransfer.dropEffect="copy",removeImportAlerts()}).on("drop",handleConfigFileSelect),$("#import-file-select").on("change",handleConfigFileSelect),$("#import-manual-trigger").on("click",removeImportAlerts);var $inputsComponent=$("#less-section input"),$inputsPlugin=$("#plugin-section input"),$inputsVariables=$("#less-variables-section input");$("#less-section .toggle").on("click",function(e){e.preventDefault(),$inputsComponent.prop("checked",!$inputsComponent.is(":checked"))}),$("#plugin-section .toggle").on("click",function(e){e.preventDefault(),$inputsPlugin.prop("checked",!$inputsPlugin.is(":checked"))}),$("#less-variables-section .toggle").on("click",function(e){e.preventDefault(),$inputsVariables.val("")}),$("[data-dependencies]").on("click",function(){if($(this).is(":checked")){var dependencies=this.getAttribute("data-dependencies");if(dependencies){dependencies=dependencies.split(",");for(var i=0;i<dependencies.length;i++){var $dependency=$('[value="'+dependencies[i]+'"]');$dependency&&$dependency.prop("checked",!0)}}}}),$("[data-dependents]").on("click",function(){if(!$(this).is(":checked")){var dependents=this.getAttribute("data-dependents");if(dependents){dependents=dependents.split(",");for(var i=0;i<dependents.length;i++){var $dependent=$('[value="'+dependents[i]+'"]');$dependent&&$dependent.prop("checked",!1)}}}});var $compileBtn=$("#btn-compile");$compileBtn.on("click",function(e){var configData=getCustomizerData(),configJson=JSON.stringify(configData,null,2);e.preventDefault(),$compileBtn.attr("disabled","disabled"),createGist(configJson,function(gistUrl,customizerUrl){configData.customizerUrl=customizerUrl,configJson=JSON.stringify(configData,null,2);var preamble="/*!\n * Generated using the Bootstrap Customizer ("+customizerUrl+")\n * Config saved to config.json and "+gistUrl+"\n */\n";$.when(generateCSS(preamble),generateJS(preamble),generateFonts()).done(function(css,js,fonts){generateZip(css,js,fonts,configJson,function(blob){$compileBtn.removeAttr("disabled"),setTimeout(function(){saveAs(blob,"bootstrap.zip")},0)})})})}),function(){function failback(){$(".bs-docs-section, .bs-docs-sidebar").css("display","none"),showCallout('Looks like your current browser doesn\'t support the Bootstrap Customizer. Please take a second to <a href="http://browsehappy.com/">upgrade to a more modern browser</a> (other than Safari).',!0)}var url=window.webkitURL||window.URL,svg=new Blob(["<svg xmlns='http://www.w3.org/2000/svg'></svg>"],{type:"image/svg+xml;charset=utf-8"}),objectUrl=url.createObjectURL(svg);null!==/^blob:/.exec(objectUrl)&&supportsFile?$("<img>").on("load",function(){$compileBtn.prop("disabled",!1)}).on("error",failback).attr("src",objectUrl):failback()}(),function(){var id=getQueryParam("id");id&&$.ajax({url:"https://api.github.com/gists/"+id,type:"GET",dataType:"json"}).success(function(result){updateCustomizerFromJson(JSON.parse(result.files["config.json"].content))}).error(function(err){showError("Error fetching bootstrap config file",err)})}()};