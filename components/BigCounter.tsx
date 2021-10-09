import * as React from "react";
import CounterContext from "../classes/CounterContext";

interface Props {
    context: CounterContext
}

interface State {
    counter: number
}

export default class BigCounter extends React.PureComponent<Props, State> {
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
        return <div className="text-center">
            Un autre type de composant avec le même compteur : <br/>
            <div className="h1">{this.state.counter}</div>
        </div>
    }
}