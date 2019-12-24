.PHONY: package
package :
	zip -r confluence-plus.zip \
    	content-scripts \
    	manifest.json
