import RX = require('reactxp');

interface UserInputState {
    inputValue?: string;
}

interface UserInputProps {
    onSubmit: (msg: string) => void;
}

const _styles = {
    textInput: RX.Styles.createTextInputStyle({
        margin: 12,
        padding: 4,
        borderColor: '#999',
        borderWidth: 1,
        borderStyle: 'solid',
        height: 30,
        fontSize: 16
    })
};

export class UserInput extends RX.Component<UserInputProps, UserInputState> {
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
                    onSubmitEditing={ this._onSubmitEditing}
                    autoFocus={ true }
                    placeholder={ 'Enter your phrase' }
                    style={ _styles.textInput }
                />
        )
    }

    private _onTextInputChanged = (newValue: string) => {
        this.setState({ inputValue: newValue });
    };

    private _onSubmitEditing = () => {
        this.props.onSubmit(this.state.inputValue);

        this.setState({ inputValue: "" });
    };
}
