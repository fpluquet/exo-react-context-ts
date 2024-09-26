import {ReactNode, useContext, useState} from "react";

import {createContext} from "react";
import {AnonymousUser, User} from "../models/User.ts";
import {LoginContextState, LoginContextType} from "./LoginContextTypes.ts";



const LoginContext = createContext<LoginContextType>({
    user: AnonymousUser.getInstance(),
    connecting: false,
    login: async () => {},
    logout: () => {}
})

export default function LoginContextProvider (props : {children: ReactNode}) {
    const [state, setState] = useState<LoginContextState>({
        user: AnonymousUser.getInstance(),
        connecting: false,
    })

    // todo 3 : implémenter la méthode login pour qu'elle interagisse avec une API que vous codez en NodeJS et express

    const login = async (username: string, password: string) => {
        setState({...state, connecting: true, user: AnonymousUser.getInstance()})
        try {
            const response = await fetch('http://localhost:3005/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            })
            if(!response.ok) {
                throw new Error('Error')
            }
            const data = await response.json()
            const user = new User(data.name)
            user.secrets = data.secrets
            setState({...state, connecting: false, user})
        } catch (error) {
            console.error('Error:', error)
            setState({...state, connecting: false, user: AnonymousUser.getInstance()})
        }
    }
        // return new Promise<void>((resolve) => {
        //     setTimeout(() => {
        //         setState({...state, connecting: false, user: new User('John Doe')})
        //         resolve()
        //     }, 1000)
        // })

    const logout = () => {
        setState({...state, connecting: false, user: AnonymousUser.getInstance()})
    }

    return (
        <LoginContext.Provider value={{...state, login, logout}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}
