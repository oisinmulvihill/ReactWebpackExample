YARN_VERSION=1.0.1
NODE_VERSION=v10.11.0
NODE_BIN=./node_modules/.bin

install:
ifneq ($(shell node --version),${NODE_VERSION})
	$(error 'You must install node ${NODE_VERSION}')
endif
	${NODE_BIN}/yarn install

clean:
	rm -rf dist
	rm -rf build

build: NODE_ENV=development
build:
	# Build the static resources of the React app which will be put into
	# the viewers static directory.
	$(NODE_BIN)/webpack-cli --config webpack.config.js

run: NODE_ENV=development
run:
	$(NODE_BIN)/webpack-dev-server --config webpack.config.js

watch:
	$(NODE_BIN)/webpack-cli --watch
