#!/usr/bin/env bash

docker run --name cock-mongo -p 27017:27017 -h 127.0.0.1:127.0.0.1 -d mongo
docker run --name cock-redis -p 6379:6379 -h 127.0.0.1:127.0.0.1 -d redis
