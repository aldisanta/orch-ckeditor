/*
 * Plugin for Insert Time for use with CKEditor by Wirawan Nathaniel Chandra - Copyright (c) IndoSoft Corporation 
 *
 * This plugin would not be possible without the support of the following
 * applications.
 *
 * CKeditor - http://www.ckeditor.com
 *
 *
 */
(function() {  
	CKEDITOR.plugins.add( 'time', {
		init: function(editor) {
			editor.addCommand( 'time', {
					exec : function(editor) {    
						function addZeros(value, len) {
							value = "" + value;
							if (value.length < len) {
								for (var i=0; i<(len-value.length); i++) {
									value = "0" + value;
								}	
							}
							return value;
						};
						var dNow = new Date();
						var dHourNow = dNow.getHours();
						var dMinuteNow = dNow.getMinutes();
						var dSecondNow = dNow.getSeconds();
						var dTimeNow = addZeros(dHourNow,2) + ":" + addZeros(dMinuteNow,2) + ":" + addZeros(dSecondNow,2);
						editor.insertHtml(dTimeNow.toString());
					}
			});
			editor.ui.addButton( 'time',{
				label: 'Insert Time',
				command: 'time',
				icon: this.path + 'images/time.png'
			} );
		}
	});
})();