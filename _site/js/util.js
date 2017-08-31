function generate() {
	// Email obfuscator script 2.1 by Tim Williams, University of Arizona
	// Random encryption key feature by Andrew Moulden, Site Engineering Ltd
	// This code is freeware provided these four comment lines remain intact
	// A wizard to generate this code is at http://www.jottings.com/obfuscator/
	coded = "Q.4.1SRz@jdEqqpEJF.So.f4"
	key = "xzA2NLQq6TnlchtIvkwrsu3abePYMiDV0mRJodWgU41Kjf5SZEyB8pOGCH97XF"
	shift=coded.length
	link=""
	for (i=0; i<coded.length; i++) {
		if (key.indexOf(coded.charAt(i))==-1) {
		  ltr = coded.charAt(i)
		  link += (ltr)
		}
		else {     
		  ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
		  link += (key.charAt(ltr))
		}
	}
		$("#contact-email>p").text(link);
	return;				
}
