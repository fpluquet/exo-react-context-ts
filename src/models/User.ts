export class User {

    protected _name: string;

    constructor(name: string) {
        this._name = name
    }

    isLoggedIn() {
        return true
    }

    get name() {
        return this._name
    }
}

export class AnonymousUser extends User {

    private static instance: AnonymousUser = new AnonymousUser()

    static getInstance() {
        return AnonymousUser.instance
    }

    private constructor() {
        super('Anonymous')
    }

    isLoggedIn() {
        return false
    }
}
