import * as React from "react";

interface Props {
    bg: string,
    handleChoice: (string) => void
}

interface State {
}

export default class ChoiceBg extends React.PureComponent<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
        }
    }

    choice() {
        this.props.handleChoice(this.props.bg)
    }

    render() {
        return <button className={"btn ms-1 me-1 text-white " + this.props.bg} onClick={() => this.choice()}>Choisir</button>
    }
}