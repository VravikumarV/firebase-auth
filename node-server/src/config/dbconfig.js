module.exports = {
    //url: "mongodb+srv://userprofiles:P!ssOff123@uam-cluster-0.conzl.mongodb.net/userprofiles?retryWrites=true&w=majority"
    //url: "mongodb+srv://userprofiles:P!ssO123@uam-cluster-0.conzl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    //url: "mongodb://admin:admin@localhost:27017/userprofiles?authSource=admin"
    mongodbcurl: "mongodb://mongodbc:27017/userprofiles?authSource=admin"      // working, mongodbc is the container name and this works in combination with network which is being shared across docker services in compose file.
  };