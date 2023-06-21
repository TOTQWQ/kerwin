const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class myPromise {
    #state = PENDING;
    #result = null;
    #handler = [];

    constructor(executor) {
        const resolve = (data) => {
            this.#changeState(FULFILLED, data);
        }
        const reject = (reason) => {
            this.#changeState(REJECTED, reason);
        }
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error);
        }
    }

    #changeState(state, result) {
        if (this.#state !== PENDING) return;
        this.#state = state;
        this.#result = result;
        this.#run();
    }

    then(onFulfilled, onRejected) {
        return new myPromise((resolve, reject) => {
            this.#handler.push({
                onFulfilled,
                onRejected,
                resolve,
                reject
            });
            this.#run();
        });
    }

    #run() {
        if (this.#state === PENDING) return;
        while (this.#handler.length) {
            const { onFulfilled, onRejected, resolve, reject } = this.#handler.shift();
            const callback = this.#state === FULFILLED ? onFulfilled : onRejected;
            this.#runOne(callback, resolve, reject);
        }
    }

    #runOne(callback, resolve, reject) {
        if (typeof callback !== 'function') {
            const settled = this.#state === FULFILLED ? resolve : reject;
            settled(this.#result);
        }

        try {
            const data = callback(this.#result);
            if (this.#isPromiseLike(data)) {
                data.then(resolve, reject);
            } else {
                resolve(data);
            }
        } catch (error) {
            reject(error);
        }
    }

    #isPromiseLike(value) {
        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
            return typeof value.then === 'function';
        }
        return false;
    }

    #runMicroTask(func) {
        if (typeof process === 'object' && typeof process.nextTick === 'function') {
            process.nextTick(func);
        } else if(typeof MutationObserver === 'function') {
            const ob = new MutationObserver(func);
            const textNode = document.createTextNode('1');
            ob.observe(textNode, {
                characterData: true
            });
            textNode.data = '2';
        }
    }

}