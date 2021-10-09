import * as React from 'react'
import {render} from 'react-dom'
import CounterContext from "./classes/CounterContext";
import Counter from "./components/Counter";
import BigCounter from "./components/BigCounter";
import ChangeBg from "./components/ChangeBg";

interface Props {
}

interface State {
}

class App extends React.PureComponent<Props, State> {
    private readonly counterContext: CounterContext

    constructor(props: Props) {
        super(props)

        this.counterContext = new CounterContext()
    }

    render() {
        return <div className="app d-flex flex-row flex-wrap">
            <div className="sandbox flex-grow-1 bg-info text-white">
                <div className="h1 text-center mt-4 mb-4 ">Communication par context</div>
                <div className="text-center d-flex justify-content-around">
                    <Counter context={this.counterContext} />
                    <Counter context={this.counterContext} />
                </div>
                <div className="mt-4">
                    <BigCounter context={this.counterContext} />
                </div>
            </div>
            <div className="sandbox flex-grow-1 bg-primary">
                <div className="h1 text-center mt-4 mb-4 text-white">Communication avec le parent</div>
                <div className="text-center d-flex justify-content-around">
                    <ChangeBg />
                </div>
            </div>
        </div>
    }
}

render(
    <App/>,
    document.getElementById('app')
)