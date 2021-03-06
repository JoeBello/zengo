'use strict';

var nock = require('nock');

var ZnHttp = require('./lib/zn-http.js');

var Api = require('../../src/api.js');

var createZnHttp = function() {
	var options = {
		headers: {}
	};
	ZnHttp(options).parseHeaders();
	return new ZnHttp();
};

var createApi = function() {
	var znHttp = createZnHttp();
	return Api(znHttp);
};

var nockOnZengineApi = function() {
	return nock('https://api.zenginehq.com/v1');
};

module.exports = {
	createApi: createApi,
	ZnNock: nockOnZengineApi
};
