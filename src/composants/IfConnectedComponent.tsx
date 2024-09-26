import {useLoginContext} from "../contexts/LoginContextProvider.tsx";

export function IfConnectedComponent(props: {children: React.ReactNode}) {
    const loginContext = useLoginContext()
    return loginContext.user.isLoggedIn ? (
        <>{props.children}</>
    ) : <></>
}
