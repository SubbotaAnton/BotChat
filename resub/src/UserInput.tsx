import RX = require('reactxp');
import ChatStore from './ChatStore';

interface ChatPanelState {
    inputValue?: string;
}

const _styles = {
    container: RX.Styles.createViewStyle({
        flexDirection: "row"
    }),
    textInput: RX.Styles.createTextInputStyle({
        margin: 12,
        padding: 4,
        borderColor: '#999',
        borderWidth: 1,
        borderStyle: 'solid',
        height: 30,
        fontSize: 16,
        flexGrow: 4
    }),
    submitButton: RX.Styles.createViewStyle({
        margin: 12,
        borderRadius: 6,
        backgroundColor: '#666',
        flexGrow: 1
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 14,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
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
            <RX.View style={ _styles.container }>
                <RX.TextInput
                    value={ this.state.inputValue }
                    onChangeText={ this._onTextInputChanged }
                    onSubmitEditing={ this._onSubmitEditing}
                    autoFocus={ true }
                    placeholder={ 'Enter your phrase' }
                    style={ _styles.textInput }
                />
                <RX.Button style={ _styles.submitButton } onPress={ this._onSubmitEditing }>
                    <RX.Text style={ _styles.buttonText }>
                        Submit
                    </RX.Text>
                </RX.Button>
            </RX.View>
        )
    }

    private _onTextInputChanged = (newValue: string) => {
        this.setState({ inputValue: newValue });
    };

    private _onSubmitEditing = () => {
        ChatStore.submitMessage(this.state.inputValue);

        this.setState({ inputValue: "" });
    };
}
