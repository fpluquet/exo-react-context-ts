export class User {

    protected _name: string;
    protected _secrets: string[]

    constructor(name: string) {
        this._name = name
        this._secrets = []
    }

    get isLoggedIn() {
        return true
    }

    get name() {
        return this._name
    }

    get secrets() {
        return this._secrets
    }

    set secrets(secrets: string[]) {
        this._secrets = [...secrets]
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

    get isLoggedIn() {
        return false
    }
}
