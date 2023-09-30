import React, { FC, ReactNode } from 'react';



interface IProps {
    title: string;
    test?: string;
}

export const App = (props: IProps) => {
    const { title, test = 'test' } = props;

    return (
        <h1>
            {title}
            {test}
        </h1>
    );
};





// легаси
interface ITitleProps {
    title: string;
    children?: ReactNode;
}

export const Title: FC<ITitleProps> = (props: ITitleProps) => {

    const { title, children } = props;

    return (
        <h1>
            {title}
            {children}
        </h1>
    );
};