if(typeof widget24372835796_loaded === 'undefined') {
	widget24372835796_loaded = true;
	
	function widget24372835796_has_class(element, selector) {
	    var className = " " + selector + " ";
        if ((" " + element.className + " ").replace(/[\n\t\r]/g, " ").indexOf(className) > -1) {
            return true;
        }	
	    return false;
	}
	
	(function() {
		var css = document.createElement('style');
		css.type = 'text/css';
		css.innerHTML = '.widget24372835796 div, .widget24372835796 span, .widget24372835796 h1, .widget24372835796 h2, .widget24372835796 h3, .widget24372835796 h4, .widget24372835796 h5, .widget24372835796 h6, .widget24372835796 p, .widget24372835796 a, .widget24372835796 em, .widget24372835796 img, .widget24372835796 strong, .widget24372835796 ol, .widget24372835796 ul, .widget24372835796 li, .widget24372835796 form, .widget24372835796 label, .widget24372835796 table, .widget24372835796 tbody, .widget24372835796 thead, .widget24372835796 tr, .widget24372835796 th, .widget24372835796 td { margin: auto !important; padding: auto !important; border: 0 !important; outline: 0 !important; color: #000000 !important; font-weight: inherit !important; font-style: inherit !important; font-size: 100% !important; font-family: inherit !important; line-height: 100% !important; text-align: left !important; vertical-align: baseline !important; word-spacing: normal !important; }, .widget24372835796 :focus { outline: 0 !important; }, .widget24372835796 ol, .widget24372835796 ul { list-style: none !important; }, .widget24372835796 table { border-collapse: separate !important; border-spacing: 0 !important; }, .widget24372835796 th, .widget24372835796 td { text-align: left !important; font-weight: normal !important; }';
		document.body.appendChild(css);

		var divs = document.getElementsByTagName('div');
		for(var i = 0; i < divs.length; i++) {
			var div = divs[i];
			
			if(widget24372835796_has_class(div, 'widget24372835796')) {
				var img = document.createElement('img');
				//img.src = 'https://a248.e.akamai.net/f/1/1/1/dci.download.akamai.com/35985/159415/1/widget/ajax-loader.gif';
				img.style.margin = '10px';
				div.appendChild(img);
				
				var type = div.getAttribute('data-widget-type');

				var language = window.navigator.userLanguage || window.navigator.language;
				
				var location = div.getAttribute('data-widget-location') || window.location.href;
				
				var ns = document.createElement('script');
				ns.type = 'text/javascript';
				ns.async = true;
				ns.src = 'https://d3s2tsdr8lh01d.cloudfront.net' 
					+ '?location=' + encodeURIComponent(location) 
					+ '&type=' + type 
					+ '&language=' + language
					+ '&v=3';
				var fs = document.getElementsByTagName('script')[0];
				fs.parentNode.insertBefore(ns, fs);
			}
		}
	})();
}
