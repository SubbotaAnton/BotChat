import RX = require('reactxp');
import ChatStore from './ChatStore';

interface ChatPanelState {
    inputValue?: string;
}

class UserInput extends RX.Component<{}, ChatPanelState> {
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

export = UserInput;