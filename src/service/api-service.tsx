import {FC,ReactNode,createContext,useContext,useState} from "react";
import *as api from "./api-interface";
export const ApiServiceContext = createContext<api.ApiService >({
        login:() => Promise.reject('please setup ApiServiceProvider'),
        logout:() => Promise.reject('please setup ApiServiceProvider'),
        getUserProfile:() => Promise.reject('please setup ApiServiceProvider'),
        listNotify:() => Promise.reject('please setup ApiServiceProvider'),
        listProduct:() => Promise.reject('please setup ApiServiceProvider'),
        listOrder:() => Promise.reject('please setup ApiServiceProvider'),
        listLocation:() => Promise.reject('please setup ApiServiceProvider'),
        placeOrder:() => Promise.reject('please setup ApiServiceProvider'),     
    });

export const useApi = () => useContext(ApiServiceContext);


export const MockApiServiceProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [mockApi, ] = useState( new api.MockApi()); 
    return (
        <ApiServiceContext.Provider value={mockApi}>{children}</ApiServiceContext.Provider>
    );
}
