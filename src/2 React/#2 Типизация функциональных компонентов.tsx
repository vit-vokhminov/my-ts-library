import React, { FC, ReactNode } from 'react';


// легаси
interface ITitleProps {
    title?: string;
    children: ReactNode;
}

export const App: FC<ITitleProps> = (props: ITitleProps) => {

    const { title = 'test', children } = props;

    return (
        <h1>
            {title}
            {children}
        </h1>
    );
};
// React.FC заставляет компонент неявно принимать дочерние элементы, даже если он не должн этого делать.
// Если не передаются внешние свойства или children, то тип React.FC можно не указывать.




interface IProps {
    title?: string;
    children: ReactNode;
}

export const App1 = (props: IProps) => {
    const { title = 'test', children } = props;

    return (
        <h1>
            {title}
            {children}
        </h1>
    );
};












export const App2 = ({ title = 'test', children }: IProps) => {

    return (
        <h1>
            {title}
            {children}
        </h1>
    );
};