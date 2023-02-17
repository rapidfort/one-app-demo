#!/bin/bash
set -x
echo "Amex one-app Demo"
IMAGE=oneamex/one-app-dev
TAG=5.0.0
APP=hello-oneapp
PORT_EXPORT='-p 3000:3000 -p 3001:3001 -p 3002:3002 -p 3005:3005 -p 9229:9229'

# pull the latest Redis image
docker pull $IMAGE:$TAG

# run rfstub to generate the stub. this creates a new image, redis:latest-rfstub
rfstub $IMAGE:$TAG

# run the stub. add the SYS_PTRACE capability so that RapidFort can trace the runtime behavior
docker run --rm -d -p "${PORT_EXPORT}" \
    --name my-rf-oneapp-test \
    -e NODE_ENV=development \
    --cap-add=SYS_PTRACE \
    -v${PWD}/static:/opt/one-app/static \
    $IMAGE:$TAG-rfstub /bin/sh -c "node lib/server/index.js  --root-module-name=${APP} "

sleep 15

# run some tests to exercise the application.
# TODO:add test case for hello world

# stop the container
docker stop my-rf-oneapp-test

# run rfharden to optimize and secure the image. this creates a new image, redis:latest-rfhardened
rfharden $IMAGE:$TAG-rfstub

# check out the various images we created
docker images | grep one-app

# run the hardened image and test it again
docker run --rm -d -p "${PORT_EXPORT}" \
    --name my-rf-oneapp-test \
    -e NODE_ENV=development \
    -v${PWD}/static:/opt/one-app/static \
    $IMAGE:$TAG-rfhardened /bin/sh -c "node lib/server/index.js  --root-module-name=${APP} "

sleep 15

# run some tests to exercise the application.
# TODO:add test case for hello world

# stop the container
docker stop my-rf-oneapp-test

# for more information, please view the Getting Started documentation
echo "https://docs.rapidfort.com/getting-started/docker"
