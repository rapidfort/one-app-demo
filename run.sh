APP=hello-oneapp
docker run -t -p 3000:3000 -p 3001:3001 -p 3002:3002 -p 3005:3005 -p 9229:9229 -e NODE_ENV=development   -v${PWD}/static:/opt/one-app/static oneamex/one-app-dev:5.0.0-rfhardened /bin/sh -c "node lib/server/index.js  --root-module-name=${APP} "
