import Course from './1.js';

export default class OnlineCourse extends Course {
    #platform;

    constructor(name, duration, isPaid, platform) {
        super(name, duration, isPaid);
        this.#platform = platform;
    }

    get platform() { return this.#platform; }
    set platform(value) { this.#platform = value; }

    show() {
        super.show();
        console.log(this.#platform);
    }

    delete() {
        this.#platform = null;
        super.delete();
    }

    copy() {
        return this;
    }

    static clone(instance) {
        return new OnlineCourse(instance.name, instance.duration, instance.isPaid, instance.platform);
    }
}
