var url = require('url');

var URLBuilder = function(_url, queryParams) {
  if (!(this instanceof URLBuilder)) return new URLBuilder(_url, queryParams);
  _url = _url.toString();
  this._originUrl = _url;
  this._url = url.parse(_url || '', true, true);
  delete this._url.search;
  for (var prop in queryParams) if (queryParams.hasOwnProperty(prop)) {
    this.setQuery(prop, queryParams[prop]);
  }
}
URLBuilder.prototype.get = function(key) {
  return this._url[key];
}
URLBuilder.prototype.set = function(key, val) {
  this._url[key] = val;
  return this;
}
URLBuilder.prototype.unset = function(key) {
  delete this._url[key];
  return this;
}
URLBuilder.prototype.getQuery = function(key) {
  return this._url.query[key];
}
URLBuilder.prototype.setQuery = function(key, val) {
  this._url.query[key] = val;
  return this;
}
URLBuilder.prototype.unsetQuery = function(key) {
  if (this._url.query) {
    delete this._url.query[key];
  }
  return this;
}
URLBuilder.prototype.reset = function() {
  URLBuilder.call(this, this._originUrl);
  return this;
}
URLBuilder.prototype.toString = function() {
  return url.format(this._url);
}

module.exports = URLBuilder;
