/*
 * Plugin for document list for use with CKEditor by Wirawan Nathaniel Chandra - Copyright (c) IndoSoft Corporation 
 *
 * This plugin would not be possible without the support of the following
 * applications.
 *
 * CKeditor - http://www.ckeditor.com
 *
 *
 */
(function() {  
	CKEDITOR.plugins.add( 'document', {
		init: function(editor) {
			editor.addCommand( 'document', {
					exec : function(editor) {    
						popup('/scripts/orch-ckeditor/orch-custom_plugins_server/document/docLib_list.asp?editorID=' + editor.name,700,350);
					}
			});
			editor.ui.addButton( 'document',{
				label: 'Document Manager',
				command: 'document',
				icon: this.path + 'images/document.png'
			} );
		}
	});
})(); 