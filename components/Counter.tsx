import * as React from "react";
import CounterContext from "../classes/CounterContext";

interface Props {
    context: CounterContext
}

interface State {
    counter: number
}

export default class Counter extends React.PureComponent<Props, State> {
    private readonly counterContext: CounterContext

    constructor(props: Props) {
        super(props)

        this.counterContext = props.context

        this.state = {
            counter: 0
        }

        this.counterContext.subscribe((counter: number) => this.setState({...this.state, counter}))
    }

    render() {
        return <div>
            <div className="card">
                <div className="card-body bg-primary">
                    <span className="h2 card-title">{this.state.counter}</span>
                </div>
                <div className="card-body">
                    <button className="btn btn-dark ms-1 me-1" onClick={() => this.counterContext.increment()}>+</button>
                    <button className="btn btn-dark ms-1 me-1" onClick={() => this.counterContext.decrement()}>-</button>
                </div>
            </div>
        </div>
    }
}