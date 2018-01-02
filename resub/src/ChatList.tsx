import RX = require('reactxp');
import { ComponentBase } from 'resub';

import { default as ChatStore, Message } from './ChatStore';

interface ChatListState {
    messages?: Message[];
}

const _styles = {
    list: RX.Styles.createViewStyle({
        flexDirection: 'column',
        alignSelf: 'stretch',
        flexGrow: 1,
        flexShrink: 1
    }),
    item: RX.Styles.createViewStyle({
        padding: 4
    }),
    itemByBot: RX.Styles.createTextStyle({
        backgroundColor: "lightgrey",
        // for sure it has to be realized in different way in real chat
        // but just to make visual representation clearer
    }),
    author: RX.Styles.createTextStyle({
        fontSize: 11,
        color: "blue"
    }),
    time: RX.Styles.createTextStyle({
        fontSize: 11,
        color: "grey"
    }),
};

export class ChatList extends ComponentBase<{}, ChatListState> {
    protected _buildState(props: {}, initialBuild: boolean): ChatListState {
        return {
            messages: ChatStore.getMessages()
        }
    }

    render() {
        const items = this.state.messages.map((item: Message, index: number) => {
            return (
                <RX.View key={item.id} style={ [_styles.item, item.author  === "Bot" && _styles.itemByBot] }>
                    <RX.Text style={ _styles.author }>{item.author}</RX.Text>
                    <RX.Text>{item.text}</RX.Text>
                    <RX.Text style={ _styles.time }>{item.timestamp}</RX.Text>
                </RX.View>
            )
        });

        return (
            <RX.View style={ _styles.list }>
                {items}
            </RX.View>
        );
    }
}
