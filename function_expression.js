function sendMessage(to, message, callback) {
    console.log("To " + to + ": " + message);
    callback();
}

sendMessage("John", "Hello John", function () {
    console.log("Message has been sent");
});

sendMessage("John", "How are you?", () => {
    console.log("Hooking notification service");
});