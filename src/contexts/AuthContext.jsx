import React, { Component, createContext } from 'react';
export const AuthContext = createContext();

class AuthProvider extends Component{
    state={
        isAuthentation:false
    }
    toggleLogInOut=()=>{
        this.setState({ isAuthentation:!this.state.isAuthentation })
    }
    render(){
        return(
            <AuthContext.Provider value={{...this.state,toggleLogInOut:this.toggleLogInOut}}>
                {this.props.children}               
            </AuthContext.Provider>
        );
    }
}
export default AuthProvider;