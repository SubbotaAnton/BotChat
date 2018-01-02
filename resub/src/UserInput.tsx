import RX = require('reactxp');
import ChatStore from './ChatStore';

interface ChatPanelState {
    inputValue?: string;
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

export class UserInput extends RX.Component<{}, ChatPanelState> {
    constructor(props: {}) {
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
                    style={ _styles.textInput }
                />
        )
    }

    private _onTextInputChanged = (newValue: string) => {
        this.setState({ inputValue: newValue });
    };

    private handleSubmitEditing = () => {
        ChatStore.submitMessage(this.state.inputValue);

        this.setState({ inputValue: "" });
    };
}
