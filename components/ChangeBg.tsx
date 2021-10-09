import * as React from "react";
import ChoiceBg from "./ChoiceBg";

interface Props {
}

interface State {
    bg: string
}

export default class ChangeBg extends React.PureComponent<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            bg: ""
        }
    }

    handleChoice(bg: string) {
        this.setState({...this.state, bg})
    }

    render() {
        return <div className="text-center">
            <div className="card">
                <div className={"card-body " + this.state.bg}>
                </div>
                <div className="card-body">
                    <ChoiceBg bg="bg-success" handleChoice={this.handleChoice.bind(this)}/>
                    <ChoiceBg bg="bg-danger" handleChoice={this.handleChoice.bind(this)}/>
                </div>
            </div>
        </div>
    }
}