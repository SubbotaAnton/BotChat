import RX = require('reactxp');

import UserInput = require('./UserInput');
import ChatList = require('./ChatList');
import AIInput = require('./AIInput');

interface ChatPanelState {
    inputValue?: string;
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

class ChatPanel extends RX.Component<{}, ChatPanelState> {
    render() {
        return (
            <RX.View style={ [_styles.listContainer, RX.StatusBar.isOverlay() && _styles.statusSpacer] }>
                <RX.Text>Hello World</RX.Text>
                <ChatList />
                <UserInput/>
                <AIInput/>
            </RX.View>
        )
    }
}

export = ChatPanel;