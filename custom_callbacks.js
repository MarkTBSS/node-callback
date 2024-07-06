function greeting(name, callback) {
    console.log('Hello ' + name);
    callback();
}

greeting('Alice', function() {
    console.log('Callback function executed.');
});

// not callbcak
function greeting(name) {
    console.log('Hello ' + name);
    console.log('Callback function executed.');
}

greeting('Alice');