class myPromise {
    #status = 'pending';
    #result = null;
    #reason = null;
    #onFulfilledCallbacks = [];
    #onRejectedCallbacks = [];

    constructor(excutor) {
        try {
            excutor(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }

    resolve(result) {
        if (this.#status === 'pending') {
            this.#result = result;
            this.#status = 'fulfilled';
            this.#onFulfilledCallbacks.forEach(item => item(result));
        }
    }

    reject(reason) {
        if (this.#status === 'pending') {
            this.#reason = reason;
            this.#status = 'rejected';
            this.#onRejectedCallbacks.forEach(item => item(reason));
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (data) { this.resolve(data) };
        onRejected = typeof onRejected === 'function' ? onRejected : function (err) { this.reject(err) };

        if (this.#status === 'pending') {
            this.#onFulfilledCallbacks.push(onFulfilled.bind(this));
            this.#onRejectedCallbacks.push(onRejected.bind(this));
        }
    }

}

export default myPromise;