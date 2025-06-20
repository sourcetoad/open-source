---
title: Enhanced Resources
id: enhanced-resources
---

_Enhancements for Laravel's API resources._

In the earlier days of Laravel there wasn't a standard way to represent API resources. Folks gathered around solutions like [Fractal](https://fractal.thephpleague.com) until Laravel introduced [Resources](https://laravel.com/docs/12.x/eloquent-resources).

We found a breath of fresh air with the introduction of resources, but it was still missing a few things that we wanted. We wanted to be able to:

 * Use multiple different formats for the same resource
 * Modify values on the fly without cluttering up the resource

This allowed our API returns to be located in one central area providing the ability to pivot data returned per user role. This can be understood with this simple example:

```php
<?php

use Sourcetoad\EnhancedResources\Formatting\Attributes\Format;
use Sourcetoad\EnhancedResources\Formatting\Attributes\IsDefault;
use Sourcetoad\EnhancedResources\Resource;

class QuestionResource extends Resource
{
    #[IsDefault, Format]
    public function base(): array
    {
        return [
            'type' => $this->type,
            'text' => $this->text,
            'answers' => $this->answers,
        ];
    }

    #[Format]
    public function teacher(): array
    {
        $data = $this->base();
        $data['correct_answer'] = $this->correct_answer;

        return $data;
    }
}
```

As you can see we may want to expose the correct answer to the teacher, but not to the student. This allows us to create a resource that can be used in multiple different ways without needing to create multiple different resources.


:::info

Find on GitHub at [sourcetoad/enhanced-resources](https://github.com/sourcetoad/enhanced-resources)

:::