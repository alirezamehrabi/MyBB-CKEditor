﻿/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	
	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	config.plugins = 'dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,clipboard,button,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,div,resize,toolbar,elementspath,enterkey,entities,popup,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,indentblock,indentlist,smiley,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,bbcode,sourcearea,specialchar,scayt,stylescombo,tab,table,tabletools,undo,wsc,insertpre,videos,myoptions,confighelper,quicktable';
	config.skin = 'moonocolor';
	
	config.removePlugins = 'dialogadvtab,div,filebrowser,flash,format,forms,iframe,liststyle,pagebreak,showborders,stylescombo,templates';
	// Width and height are not supported in the BBCode format, so object resizing is disabled.
	config.disableObjectResizing = true;
	// Define font sizes in percent values.
	config.toolbar = [
		[ 'Source', '-', 'Save', 'NewPage'],
		[ 'Cut', 'Copy', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ],
		[ 'Find', 'Replace', '-', 'SelectAll', 'Scayt' ],
		[ 'Link', 'Unlink', 'Image', 'Smiley', 'SpecialChar', '-', 'HorizontalRule' ],
		[ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent' ],
		'/',
		[ 'Bold', 'Italic', 'Underline', 'Strike', 'Superscript', 'Subscript', '-', 'RemoveFormat' ],
		[ 'FontSize' , 'Font' , 'TextColor' ],
		[ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl' ],
		[ 'Blockquote', 'InsertCode', 'InsertPHP', '-', 'Videos', 'Table' ],
		[ 'MyOptions', 'Maximize' ]
	];
	config.language = 'fa';
	config.image_previewText  = ' ';
	config.height = '250';

	// My Options -> default paste
	mycookie = '';
	cname = 'myoptions_pastetext';
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) mycookie =  c.substring(name.length,c.length);
	}
	if(mycookie == 'true')
	{
		config.clipboard_defaultContentType = 'text';
	}
	else
	{
		config.clipboard_defaultContentType = 'html';
	}

	// My Options -> default paste
	mycookie = '';
	cname = 'myoptions_clearautosave';
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) mycookie =  c.substring(name.length,c.length);
	}
	if(mycookie == 'true')
	{
		config.clearautosave = 1;
	}
	else
	{
		config.clearautosave = 0;
	}
	
	config.placeholder = 'Type here...';

	// config.uiColor = '#AADC6E';
};
