/*
 * Plugin for Insert Date for use with CKEditor by Wirawan Nathaniel Chandra - Copyright (c) IndoSoft Corporation 
 *
 * This plugin would not be possible without the support of the following
 * applications.
 *
 * CKeditor - http://www.ckeditor.com
 *
 *
 */
(function() {  
	CKEDITOR.plugins.add( 'date', {
		init: function(editor) {
			editor.addCommand( 'date', {
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
						var dMonthNow = dNow.getMonth() + 1;
						var dDayNow = dNow.getDate();
						var dYearNow = dNow.getFullYear();
						var dDate = dYearNow + "-" + addZeros(dMonthNow,2) + "-" + addZeros(dDayNow,2);
						editor.insertHtml(dDate.toString());
					}
			});
			editor.ui.addButton( 'date',{
				label: 'Insert Date',
				command: 'date',
				icon: this.path + 'images/date.png'
			} );
		}
	});
})(); 