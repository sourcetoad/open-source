---
title: Rule Helper for Laravel
id: rule-helper-for-laravel
---

_Adds helpers to make building Laravel rule arrays easier by providing helper methods for the built-in rules._

As we worked to remove "magic strings" from our codebases we noticed a large contributor to this violation was Laravel validation rules. A common validation set of rules in standard Laravel may look like:

```php
return [
  'title' => 'required|string|max:255'
];
```

Which was prone for errors and lacked IDE support. We created this library to make these helpers fluent and typed. Thus evolving the sample above to:

```php
use Sourcetoad\RuleHelper\RuleSet;

return [
  'title' => RuleSet::create()
    ->required()
    ->string()
    ->max(255)
];
```

Active updates occur to keep inline with Laravel changes and new rules. As Laravel officially runs closer to fluent validation rules the need for this library may evaporate, but until then we will keep it up to date.

:::info

Find on GitHub at [sourcetoad/rule-helper-for-laravel](https://github.com/sourcetoad/rule-helper-for-laravel)

:::