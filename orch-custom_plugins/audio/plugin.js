/*
 * Plugin for audio list for use with CKEditor by Wirawan Nathaniel Chandra - Copyright (c) IndoSoft Corporation 
 *
 * This plugin would not be possible without the support of the following
 * applications.
 *
 * CKeditor - http://www.ckeditor.com
 *
 *
 */
(function() {  
	CKEDITOR.plugins.add( 'audio', {
		init: function(editor) {
			editor.addCommand( 'audio', {
					exec : function(editor) {    
						popup('/scripts/orch-ckeditor/orch-custom_plugins_server/audio/audioLib_list.asp?editorID=' + editor.name,1000,500);
					}
			});
			editor.ui.addButton( 'audio',{
				label: 'Audio Manager',
				command: 'audio',
				icon: this.path + 'images/audio.png'
			} );
		}
	});
})(); 