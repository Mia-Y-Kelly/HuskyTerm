#!/usr/bin/bash
cd app/

# Clear old build
docker stop huskyterm
docker rm huskyterm
docker image rm huskyterm

# Rebuild
docker build -t huskyterm .
docker run --name="huskyterm" -d -p 5000:5000 huskyterm
