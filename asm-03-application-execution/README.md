# Homework 3 : Application Executable

This homework will learn about programming languages and can be categorize which types are web application, mobile application or command line languages.  

Section 1
---
ให้หา Executable file / runnable file พร้อมคำสั่งที่ใช้รัน ยกตัวอย่างเช่น ./abc หรือ nong-kai abc ตามภาษาดังนี้
-

1. rust

- `$ ./target/debug/hello_cargo or .\target\debug\hello_cargo.exe on Windows`

- `$ cargo run main.rs`

Using cargo run is more convenient than having to remember to run cargo build and then use the whole path to the binary, so most developers use cargo run.

2. nodejs (javascript)

- `$ node <index.js>`

- `npm run`

3. go

- `$ go run main.go`

4. java

- `$ java -jar jarfile.jar`

- `$ javac main.java && java main`

5. C#

- `$ dotnet run`

- `$ dotnet "main.dll"`

6. Scalar

- `$ java -jar main.jar`
สกุล File คือ .sbt / .jar  

7. Haskell

- `$ runhaskell main.hs`

8. C

- `$ gcc main.c`

9. php

- `$ php main.php`

10. ruby

- `$ ruby main.rb`

11. Typescript (javascript)

- `$ tsc main.ts`

12. deno

`$ deno run main.ts`

13. bun

`$ bun run main.js`

14. python

`$ python main.py`

15. R



16. Carbon

`$ bazel run //explorer -- ./explorer/testdata/print/format_only.carbon`

17. Erlang

`% erl -compile Module1...ModuleN && erl -make && erlc <flags> File1.erl...FileN.erl`

18. Kotlin

`$ kotlinc main.kt -d main.jar`

19. Flutter

`$ lib/main.dart`

20. ObjectiveC

`$ gcc main.m`

21. WebAssembly



22. SQL

`$ dbisql -c "DSN=SQL Anywhere 12 Demo" myscript.sql`
Runs the SQL script file myscript.sql against the SQL Anywhere sample database.

23. Shell

- `./main.sh`

24. Assembly

- 

25. Switft

Use the swift run command to build and run the executable:

`swift run main.swift`

Also compile the package by running the swift build command and then run the binary from .build directory:

`swift build && .build/x86_64-apple-macosx10.10/debug/Hello`

26. Lua

`$ ./main.lua`

Section 2
---

ให้ทำการเลือกภาษาด้านบน ว่าภาษาไหนสามารถนำมาทำ Web Application อย่างน้อย 15 ภาษา, Mobile Applicaiton ได้อย่างน้อย 4 ภาษา, Command Line อย่างน้อย 10 ภาษา พร้อมทั้งบอกคำสั่งที่ทำให้ Appliacation ทำงาน (วิธีการรัน / วิธี execute)
-

- Web Application Languages

1. Java

- `$ java -jar jarfile.jar`

- `$ javac main.java && java main`

2. PHP
3. Python
4. JavaScript

- `$ node <index.js>`

5. Swift
6. Kotlin
7. Ruby
8. TypeScript
9. WebAssembly
10. C#

- `dotnet run`

- `dotnet "main.dll"`

11. Deno
12. C++
13. Bun
14. Lua
15. SQL
16. Flutter
17. Rust

- Mobile application Languages

1. Flutter
2. Objective-C : For writing iOS apps
3. Swift : For writing iOS apps
4. Python : Android
5. C : Android
7. C ++ : Android
6. Java : Android

- Command Line Languages

1. Shell
2. Haskell
3. SQL
4. Python
5. Ruby
6. Lua
8. Assembly
9. Scalar
10. Erlang


#### References

- https://www.tutorialspoint.com/erlang/erlang_overview.htm\
- https://www.erlang.org/doc/reference_manual/typespec.html#type-information-in-record-declarations
- https://github.com/carbon-language/carbon-lang
- https://infocenter.sybase.com/help/index.jsp?topic=/com.sybase.help.sqlanywhere.12.0.1/dbusage/load-s-4696303.html
- https://fireart.studio/blog/top-most-popular-programming-languages-for-mobile-app-development/
- https://becominghuman.ai/top-10-best-web-application-development-languages-8204aad91bc4
- https://docs.microsoft.com/en-us/dotnet/core/docker/build-container?tabs=windows
- https://harperdb.io/blog/is-bun-the-new-node-js/