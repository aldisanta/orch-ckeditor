/*
 * Plugin for Form On the Fly list for use with CKEditor by Wirawan Nathaniel Chandra - Copyright (c) IndoSoft Corporation 
 *
 * This plugin would not be possible without the support of the following
 * applications.
 *
 * CKeditor - http://www.ckeditor.com
 *
 *
 */
(function() {  
	CKEDITOR.plugins.add( 'fotf', {
		init: function(editor) {
			editor.addCommand( 'fotf', {
					exec : function(editor) {    
						popup('/scripts/orch-ckeditor/orch-custom_plugins_server/fotf/form_list.asp?editorID=' + editor.name,700,350);
					}
			});
			editor.ui.addButton( 'fotf',{
				label: 'Form On The Fly',
				command: 'fotf',
				icon: this.path + 'images/fotf.png'
			} );
		}
	});
})(); 