export default class Course {
    #name;
    #duration;
    #isPaid;

    constructor(name, duration, isPaid) {
        this.#name = name;
        this.#duration = duration;
        this.#isPaid = isPaid;
    }

    get name() { return this.#name; }
    set name(value) { this.#name = value; }

    get duration() { return this.#duration; }
    set duration(value) { this.#duration = value; }

    get isPaid() { return this.#isPaid; }
    set isPaid(value) { this.#isPaid = value; }

    show() {
        console.log(this.#name, this.#duration, this.#isPaid);
    }

    delete() {
        this.#name = null;
        this.#duration = null;
        this.#isPaid = null;
    }

    copy() {
        return this;
    }

    #updateSyllabus() {
        console.log("Программа обновлена");
    }

    static clone(instance) {
        return new Course(instance.name, instance.duration, instance.isPaid);
    }
}
