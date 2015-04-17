/*
	Plugin for inserting video for use with CKEditor by Wirawan Nathaniel Chandra - Copyright (c) IndoSoft Corporation
	This plugin would not be possible without the support of the following applications.
	CKeditor - http://www.ckeditor.com
*/
(function() {
    CKEDITOR.plugins.add("video", {
        init: function(b) {
            b.addCommand("video", {
                exec: function(a) {
                    popup("/scripts/orch-ckeditor/orch-custom_plugins_server/video/videoLib_list.asp?editorID=" + a.name, 1000, 500)
                }
            });
            b.ui.addButton("video", {
                label: "Video",
                command: "video"
            })
        }
    })
})();