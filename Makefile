.PHONY: build
build :
	rm confluence-plus.zip
	zip -r confluence-plus.zip \
    	content-scripts \
    	manifest.json
