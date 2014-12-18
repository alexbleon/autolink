REPORTER:=spec
TESTS:=$(shell find ./test -type f -name "*.js")

test:
	./node_modules/.bin/mocha --require should  --reporter $(REPORTER) $(TESTS)

.PHONY: test

browserify:
	rm -rf ./dist
	mkdir dist
	# Browserify
	( printf "/* ${NPM_PACKAGE} ${NPM_VERSION} ${GITHUB_PROJ} */" ; \
		browserify -r ./ -s autolink \
		) > dist/autolink.js

