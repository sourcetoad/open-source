---
title: Soapy (XML)
id: soapy
---

_SOAP is old, but still used. Soapy is modern, but feature limited to fit our use cases._

As we started to work with SOAP APIs we noticed that the libraries available were either too old or too complex. We wanted to not write a single line of XML, but still leverage the power of SOAP. Soapy was born.

Once given a WSDL file with supported class mapping requests and responses could be created from serializing simple PHP classes. A basic example response could be represented as:

```xml
<FooResponse>
    <status>Success.</status>
</FooResponse>
```

Which could be serialized into a PHP class with the following:

```php
class FooResponse {
    protected $status;
}
```

The testing via the library has some remaining work to be desired, but thankfully the amount of SOAP APIs are dwindling and thus our need to support them is also dwindling.

:::info

Find on GitHub at [sourcetoad/soapy](https://github.com/sourcetoad/Soapy)

:::
