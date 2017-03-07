var url = require('url');

var URLCreator = function(_url, queryParams) {
  if (!(this instanceof URLCreator)) return new URLCreator(_url, queryParams);
  _url = (_url || '').toString();
  this._initialUrl = _url;
  this._initialQueryParams = queryParams;
  this._url = url.parse(_url, true, true);
  delete this._url.search;
  for (var prop in queryParams) if (queryParams.hasOwnProperty(prop)) {
    this.setQuery(prop, queryParams[prop]);
  }
}
URLCreator.prototype.get = function(key) {
  return this._url[key];
}
URLCreator.prototype.set = function(key, val) {
  this._url[key] = val;
  return this;
}
URLCreator.prototype.unset = function(key) {
  delete this._url[key];
  return this;
}
URLCreator.prototype.getQuery = function(key) {
  return this._url.query[key];
}
URLCreator.prototype.setQuery = function(key, val) {
  this._url.query[key] = val;
  return this;
}
URLCreator.prototype.unsetQuery = function(key) {
  if (this._url.query) {
    delete this._url.query[key];
  }
  return this;
}
URLCreator.prototype.reset = function() {
  URLCreator.call(this, this._initialUrl, this._initialQueryParams);
  return this;
}
URLCreator.prototype.toString = function() {
  return url.format(this._url);
}

module.exports = URLCreator;
