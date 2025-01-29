async function getState(promise) {
    const pending = Symbol();
​
    return Promise.race([
        promise.then(() => "fulfilled", () => "rejected"),
        new Promise(resolve => setTimeout(() => resolve("pending"), 0))
    ]);
}