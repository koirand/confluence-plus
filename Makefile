.PHONY: build
build : clean
	zip confluence-plus.zip \
		content-scripts/* \
		manifest.json \
		asset/icon-16x16.png \
		asset/icon-32x32.png \
		asset/icon-48x48.png \
		asset/icon-128x128.png

.PHONY: clean
clean :
	rm confluence-plus.zip | true
