import React, { Component } from 'react';

type CounterState = {
    count: number;
};

type CounterProps = {
    title?: string;
};

// в дженерике 2 параметра, первый типизация пропса, второй типизация стейта
class Counter extends Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    componentDidMount(): void {}

    shouldComponentUpdate(
        nextProps: CounterProps,
        nextState: CounterState
    ): boolean {
        return true;
    }

    handleClick = () => {
        this.setState(({ count }) => ({
            count: ++count,
        }));
    };

    render() {
        return (
            <div>
                <h1>
                    {this.props.title}
                    {this.state.count}
                </h1>
                <button onClick={this.handleClick}>+1</button>
            </div>
        );
    }
}

const App = () => <Counter title='Counter: ' />;

export default App;
