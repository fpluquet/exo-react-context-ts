import {User} from "../models/User.ts";

// todo 5 :
// question : pourquoi avoir des types LoginContextState, LoginContextMethods et LoginContextType ?

export interface LoginContextState {
    user: User,
    connecting: boolean,
}

export interface LoginContextMethods {
    login: () => Promise<void>,
    logout: () => void
}

// question : que veut dire le caractère & dans la ligne suivante ? (conseil : suivez l'utilisation des types)
export type LoginContextType = LoginContextState & LoginContextMethods
