YARN_VERSION=0.27.5
NODE_VERSION=v8.2.1
NODE_BIN=./node_modules/.bin
DIST=./dist

install:
ifneq ($(shell yarn --version),${YARN_VERSION})
	$(error 'You must install yarn ${YARN_VERSION}')
endif
ifneq ($(shell node --version),${NODE_VERSION})
	$(error 'You must install node ${NODE_VERSION}')
endif
	yarn install

clean:
	rm -rf $(DIST)

build:
	mkdir -p $(DIST)
	$(NODE_BIN)/webpack-cli --config webpack.config.js

run_local: build
	echo

watch:
	$(NODE_BIN)/webpack-cli --watch
