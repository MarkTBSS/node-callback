function second() {
    console.log("second called");
}

function first(callback) {
    console.log("hello first");
    callback();
}

first(second);
