
docker-compose up -d --build

MongoDB:   https://www.mongodb.com/compatibility/docker
https://hub.docker.com/_/mongo


https://stackoverflow.com/questions/60027211/mongodb-compass-disconnects-immediately

https://blog.logrocket.com/reading-writing-json-files-node-js-complete-tutorial/#loading-json-file-using-require-function   [Node]

1.  docker run --name mprofiles -d -p 27017:27017 mongo

    Connection String in compass: mongodb://localhost:27017

    Node: mongodb://localhost:27017/admin?retryWrites=true&w=majority

    docker run --name mongodb -d -e MONGO_INITDB_ROOT_USERNAME=kyc -e MONGO_INITDB_ROOT_PASSWORD=kyc123 mongo   [ not working yet ]

2.  