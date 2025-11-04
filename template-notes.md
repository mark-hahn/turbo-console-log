

- `%pfx-bc%` The prefix specified in *logMessagePrefix*.

- `%file-bc%` The complete file name. Is blank if *includeFilename* is false.

- `%line-num-bc%` The numeric line number. Is blank if *includeLineNum* is false.

- `%class-bc%` The class name. Is blank if *insertEnclosingClass* is false.

- `%func-bc%` The function name. Is blank if *insertEnclosingFunction* is false.

- `%delim-bc%` The delimiter string that is specified in option *delimiterInsideMessage*.

- `%var%` The name of the following variable. There doesn't need to be a var-bc version since no old option affects it.

- `%sfx-bc%` The suffix string specified in *logMessageSuffix*.

This default template emulates the old format.  It isn't exact right now.  For example the colon between file and line number should only appear when there is a line number. I have a fix that I'll explain when I have detailed documentation.

Default message template: `%pfx-bc% %delim-bc% %file-bc%:%line-num-bc% %delim-bc% %class-bc% %delim-bc% %func-bc% %delim-bc% %var%%sfx-bc`

Cleanup: I'm thinking this specific template can be entered by the magic value of`<default>` so no one sees that ugly thing.

The custom templates will be much cleaner.  Here is a non-backwards-compatibile template.

`🚀 ~ %file%:%line-num% ~ %class% ~ %func% ~ %var%:`

This scheme is a bit complex to explain but the only users that need to understand it are advanced users who want a custom message format. And even they will not need to understand the default template. Here is one I'll use.

`[%file-pfx% 🚀] %line-num%, %class%:%func%, %var%:`