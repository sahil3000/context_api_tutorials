import React, { Component } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar1 extends Component{
    
    
    render(){
        
        return(
        <ThemeContext.Consumer>{(context)=>{
            const {isLightTheme,light,dark}=context;
            const theme = isLightTheme?light:dark;
            return(
                <AuthContext.Consumer>{(isLoginContext)=>{
                    const {isAuthentation,toggleLogInOut}=isLoginContext;
                    
                    return(
                        <nav style={{ background:theme.ui, color:theme.syntax }}>
                        <h1>Conetext Api</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li onClick={toggleLogInOut}>
                                {isAuthentation? 'Logout' : 'Login' }
                            </li>
                        </ul>
                    </nav>
                    );
                } }</AuthContext.Consumer>
            );
        }}</ThemeContext.Consumer>
            
        );
    }
}
export default Navbar1;