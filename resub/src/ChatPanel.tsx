import RX = require('reactxp');

import { UserInput } from  './UserInput';
import { ChatList } from  './ChatList';

interface ChatPanelState {
    inputValue?: string;
}

const _styles = {
    listContainer: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch'
    })
};

export class ChatPanel extends RX.Component<{}, ChatPanelState> {
    render() {
        return (
            <RX.View style={ _styles.listContainer }>
                <UserInput/>
                <ChatList />
            </RX.View>
        )
    }
}
