//Promises represent an event that might or might not have happened yet. As such a promise can be in one of three states. Pending, fulfilled, and rejected.

//To create a promise, keep in mind the following:
const myPromise = new Promise((fulfill, reject) => {
    if (Math.random() > 0.5) {
        fulfill ();
    } else {
        reject();
    }
});

