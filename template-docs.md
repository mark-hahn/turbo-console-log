
This is an early proposal of how templates work. They are complex but they can be used in a simple way. Also users of templates are advanced users. 

I would also argue that all VScode users are advanced. These templates are child's play compared to regexes.

### Template field names.

- `pfx`: The constant string shown at the beginning of the message. It's presence specifies that the log line is from this extension. It is important that it is unique so other lines aren't confused with this. The old default is `🚀`.

- `delim`: The constant deliminator string that separates the fields. The old default is `<space>~<space>`.

- `path`: The relative path from the workspace root to the file name. An example is `src/components`. It doesn't include an ending slash (/) because the slash can be placed as a constant used like `_path_/_file_`.

- `file`: The entire file name like `index.js`.

- `file-base`: The file name base like `index`. The dot after this can be a constant.

- `file-ext`: The file name extension like `js`.

- `line-num`: The line number of the log line.

- `class`: The name of the class enclosing the log line.

- `func`: The name of the function the log line is in.

- `var`: The name of the variable shown after the message.

- `sfx`: The constant string at the end of a message. The old default is `:`.

### Template Field format.

The general format of a field is `_xxx,options,'beg','end'_` where`xxx` is the field name like `line-num`. All other parts are optional for advanced users. 

- `options` give extra display control much like option letters at the end of a regex. 

  - `number`: *Minimum field width*:  If text is shorter than this then it will be padded. If the text is larger then the field will expand as needed (unless truncate option `t` is set).

  - `t`: *Truncate*: If field width is specified and text is larger than that width then the right side will be truncated to fit.

  - `l`, `m`, and `r`. *Left, middle, and right alignment*.  If field width is specified and the text is smaller than that width then this specifies where text is aligned.

  - `^`, `c`, and `v`. *Uppercase, capitalize, and lowercase*. Change case of text.

  - `z`. *Pad with zeros*.  Use zeros instead of spaces for padding. Meant to make a column of numbers more readable.

 - `begin` is a string that is shown before the field but only if the text isn't blank. 
  
 - `end` is a string that is shown after the text but only if the text isn't blank. 


 ------------------------
