import React from 'react';

interface IContext {
    isAuth: Boolean;
    toggleAuth: () => void;
}

const AuthContext = React.createContext<IContext>({
    isAuth: false,
    toggleAuth: () => {},
});

export const Context: React.FC = (): React.ReactElement => (
    <AuthContext.Consumer>
        {({ isAuth }: IContext) => (
            <h1>{!isAuth ? 'Please log in' : 'You are logged in'}</h1>
        )}
    </AuthContext.Consumer>
);

