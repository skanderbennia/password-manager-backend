let rsa = require("node-rsa");
let fs = require("fs");

function generatePair() {
  let key = new rsa().generateKeyPair();
  var publicKey = key.exportKey("public");
  var privateKey = key.exportKey("private");

  fs.openSync("../keys/public.pem", "w");
  fs.writeFileSync("../keys/public.pem", publicKey, "utf8");
  fs.openSync("../keys/private.pem", "w");
  fs.writeFileSync("../keys/private.pem", privateKey, "utf8");
}
generatePair();

// this part will concert the application that will import the keys
var importPublicKey = new rsa();
var importPrivateKey = new rsa();

var public = fs.readFileSync("../keys/public.pem", "utf8");
var private = fs.readFileSync("../keys/private.pem", "utf8");

importPublicKey.importKey(public);
importPrivateKey.importKey(private);
