CKEDITOR.plugins.addExternal( 'document'
									,'/scripts/orch-ckeditor/orch-custom_plugins/document/');
CKEDITOR.plugins.addExternal( 'date'
									,'/scripts/orch-ckeditor/orch-custom_plugins/date/');
CKEDITOR.plugins.addExternal( 'time'
									,'/scripts/orch-ckeditor/orch-custom_plugins/time/');
CKEDITOR.plugins.addExternal( 'fotf'
									,'/scripts/orch-ckeditor/orch-custom_plugins/fotf/');
CKEDITOR.plugins.addExternal( 'audio'
									,'/scripts/orch-ckeditor/orch-custom_plugins/audio/');
CKEDITOR.plugins.addExternal( 'video'
									,'/scripts/orch-ckeditor/orch-custom_plugins/video/');
CKEDITOR.plugins.addExternal( 'aspspellchecker'
									,'/scripts/orch-ckeditor/ckeditor/plugins/aspspellchecker/');

!function ($) {
	var ckedit = function (element, options) {
		this.init(element, options);
	}

	//definition
	var old = $.fn.ckedit
	
	$.fn.ckedit = function (lazy) {
		return this.each(function () {
			var $this = $(this)
					, option = $this.data('ckoption')
					, options = $.extend({}, $.fn.ckedit.defaults, $.fn.ckedit[option]);
			//lazy load method
			switch(lazy) {
				case 'submit':
					break;
				default:
					break;
			}

			$this.ckeditor(options);
		});
	}

	//no conflict
	$.fn.ckedit.noConflict = function () {
		$.fn.ckedit = old;
		return this;
	}
	
	//default functionality
	$.fn.ckedit.defaults = {
		toolbar:
		[
			{ 
				name: 'theme_advanced_buttons1', 
				items: [
					'Bold','Italic','Underline','Strike','-',
					'JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-',
					'Undo','Redo','-',
					'RemoveFormat','-',
					'Link','Unlink'
				] 
			}
		],
		extraPlugins: '',
		removeButtons: '',
		width: '625px'
	}
	
	//extended functionality
	$.fn.ckedit.basic = {
		toolbar:
		[
			{ 
				name: 'theme_advanced_buttons1', 
				items: [
					'NewPage','-',
					'Bold','Italic','Underline','Strike','-',
					'JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock',
					'Format','-','Image','document'
				] 
			},		
			'/',
			{ 
				name: 'theme_advanced_buttons2', 
				items: [
					'Cut','Copy','Paste','PasteText','PasteFromWord','-', 
					'Find','Replace','-','BulletedList','NumberedList','-',
					'Outdent','Indent','Blockquote','-',
					'Undo','Redo','-',
					'Link','Unlink','Anchor','About','Source'
				] 
			},
			'/',
			{ 
				name: 'theme_advanced_buttons3', 
				items: [
					'date','time','Preview','-',
					'TextColor','BGColor',
					'Table' ,'-',
					'HorizontalRule','RemoveFormat','-',
					'Subscript','Superscript','-',
					'SpecialChar','-',
					'Maximize','aspspellchecker',',uiColor'
				] 
			}

		],
		extraPlugins: 'newpage,justify,find,preview,colorbutton,document,date' +
									',time,aspspellchecker'
	}

	$.fn.ckedit.basic_page = {
		toolbar:
		[
			{ 
				name: 'theme_advanced_buttons1', 
				items: [
					'NewPage','-',
					'Bold','Italic','Underline','Strike','-',
					'JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','fotf',
					'Format','-','Image','audio','document','video'
				] 
			},	
			'/',
			{ 
				name: 'theme_advanced_buttons3', 
				items: [
					'Cut','Copy','Paste','PasteText','PasteFromWord','-', 
					'Find','Replace','-','Blockquote','BulletedList','NumberedList','-',
					'Outdent','Indent','-',
					'Undo','Redo','-',
					'Link','Unlink','Anchor','About','Source'
					
				] 
			},
			'/',
			{ 
				name: 'theme_advanced_buttons4', 
				items: [
					'date','time','Preview','-',
					'TextColor','BGColor',
					'Table' ,'-',
					'HorizontalRule','RemoveFormat','-',
					'Subscript','Superscript','-',
					'SpecialChar','-',
					'Maximize','aspspellchecker',',uiColor'
				] 
			}

		],
		extraPlugins: 'newpage,justify,find,preview,colorbutton,document' + 
									',date,time,aspspellchecker,audio,video,fotf'
	}

	/* CKEDITOR DATA-API
	* =============== */
	
	$(window).on('load', function () {
		var id = "elm";
		var num = 1;
		$('[data-editor="ckeditor"]').each(function () {
			//disabled ckeditor when Delete Button found
			if ($('input[value=Delete]').length) {
				$(this).prop('disabled', true);
			}
			var $ckedit = $(this);
			$ckedit.prop('id', id + num);
			$ckedit.ckedit();
			num++;
		});
		
		$('.ckeditor-merge-field').click(function(event) {
			event.preventDefault();
			var merge_field = $(this).children('td').first().html();
			var elm = $(this).data('ckinstance');
			//somehow insertHtml is not working
			CKEDITOR.instances[elm].insertText(merge_field);
		});

		//auto update instance since 
		//http://docs.ckeditor.com/#!/api/CKEDITOR.config-cfg-autoUpdateElement 
		//not working
		CKEDITOR.on('instanceReady', function(){
			 $.each( CKEDITOR.instances, function(instance) {
				
				//key event only supported on wysiwyg mode, on source using direct keyup
				//event
				CKEDITOR.instances[instance].on('mode', function(e){
						if(e.editor.mode == 'source') {
							$('.cke_source').keyup(function(event) {
								CKEDITOR.instances[instance].updateElement();
							});
							$('.cke_source').change(function(event) {
								CKEDITOR.instances[instance].updateElement();
							});
						}
				});
				
				CKEDITOR.instances[instance].on("change", function(e) {
						for ( instance in CKEDITOR.instances )
						CKEDITOR.instances[instance].updateElement();
				});
				CKEDITOR.instances[instance].on("key", function(e) {
						for ( instance in CKEDITOR.instances )
						CKEDITOR.instances[instance].updateElement();
				});
			 });
		});

	});
}(window.jQuery);