import RX = require('reactxp');

import { UserInput } from './UserInput';
import { ChatList } from  './ChatList';
import { getAIAnswer } from '../../utils/AI';

export interface Message {
    text: string;
    id: number;
}

interface ChatPanelState {
    messages: Message[];
}

const _styles = {
    listContainer: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch'
    }),
    textInput: RX.Styles.createTextInputStyle({
        margin: 12,
        padding: 4,
        borderColor: '#999',
        borderWidth: 1,
        borderStyle: 'solid',
        height: 30,
        fontSize: 16
    }),
    statusSpacer: RX.Styles.createViewStyle({
        marginTop: 22
    })
};

export class ChatPanel extends RX.Component<{}, ChatPanelState> {
    constructor(props: {}) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            messages: []
        }
    }

    render() {
        return (
            <RX.View style={ [_styles.listContainer, RX.StatusBar.isOverlay() && _styles.statusSpacer] }>
                <RX.Text>Hello World</RX.Text>
                <ChatList messages={this.state.messages} />
                <UserInput onSubmit={this.onSubmit}/>
            </RX.View>
        )
    }

    onSubmit(text: string) {
        this.setState((prevState: ChatPanelState) => {
            const id = prevState.messages.length;

            return {
                messages: prevState.messages.concat([{
                    text,
                    id
                }, {
                    text: getAIAnswer(text),
                    id: id + 1
                }])
            }
        })
    }
}
