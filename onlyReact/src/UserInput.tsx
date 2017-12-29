import RX = require('reactxp');

interface UserInputState {
    inputValue?: string;
}

interface UserInputProps {
    onSubmit: (msg: string) => void;
}


class UserInput extends RX.Component<UserInputProps, UserInputState> {
    constructor(props: UserInputProps) {
        super(props);

        this.state = {
            inputValue: ''
        };
    }

    render() {
        return (
            <RX.TextInput
                    value={ this.state.inputValue }
                    onChangeText={ this._onTextInputChanged }
                    onSubmitEditing={ this.handleSubmitEditing}
                    autoFocus={ true }
                    placeholder={ 'Enter your phrase' }
                />
        )
    }

    private _onTextInputChanged = (newValue: string) => {
        this.setState({ inputValue: newValue });
    };

    private handleSubmitEditing = () => {
        this.props.onSubmit(this.state.inputValue);

        this.setState({ inputValue: "" });
    };
}

export = UserInput;