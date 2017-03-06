# url-builder

###Effortless URL assembling

### Examples

```
let url = new URLBuilder('http://domain/pathname/', {foo: 'foo'});
```

```
url.toString();
// 'http://domain/pathname/?foo=foo'
```

```
url.set('pathname', '/new/pathname/');
url.toString();
// 'http://domain/new/pathname/?foo=foo'
```

```
url.setQuery('bar', 'bar');
url.toString();
// 'http://domain/new/pathname/?foo=foo&bar=bar'
```

### API
- constructor(urlString, queryParams)
- get('key')
- set('key', 'value')
- unset('key')
- getQuery('key')
- setQuery('key', 'value')
- unsetQuery('key')
- reset()
- toString()
