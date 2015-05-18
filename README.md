hello-increment
===============

A basic HTTP server app that increments an integer each time it is hit.

The integer is saved in a configurable filepath.  This module is useful for testing orchestration systems that manage stateful containers.

## run the app

```bash
$ docker run -d --name hello-increment \
    -p 8080:80 \
    -e FILE=/data/file.txt \
    -v /var/data:/data \
    binocarlos/hello-increment
```

There are 2 env variables that control the app:

 * FILE - this is the filepath that the incrementing integer will be written to
 * PORT - the port the HTTP server will listen on

## licence

Copyright 2015 Kai Davenport & Contributors

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the License for the specific language governing permissions and limitations under the License.
