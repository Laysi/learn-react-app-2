import { createContext ,FC,ReactNode,useContext,useState} from 'react';
import * as api from './api-interface';
import { useNavigate } from 'react-router-dom';


interface AuthService {
    login(username: string, password: string): Promise<void>;
    logout(): Promise<void>;
    currentUser: api.User | null;
}

export const AuthServiceContext = createContext<AuthService>({
    login:()=>Promise.reject('AuthServiceContext not implemented'),
    logout:()=>Promise.reject('AuthServiceContext not implemented'),
    currentUser:null,
});

export const useAuth=()=>useContext(AuthServiceContext);

export const AuthServiceProvider:FC<{children?:ReactNode}> = ({children})=>{
    const [User,setUser] = useState<api.User|null>(null);
    const navigate = useNavigate();
    const baseApi=useApi();

    async function login(username:string,password:string):Promise<void>{

    }
    async function logout():Promise<void>{
        setUser(null);
        return;
    }
    const value: AuthService={
        login:login,
        logout:logout,
        currentUser:User,
    }
    return (<AuthServiceContext.Provider value={value}>{children}</AuthServiceContext.Provider>);
};



