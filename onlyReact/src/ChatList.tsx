import RX = require('reactxp');

import { Message } from "./ChatPanel";

interface ChatListProps {
    messages?: Message[];
}

const _styles = {
    list: RX.Styles.createViewStyle({
        flexDirection: 'column',
        alignSelf: 'stretch',
        backgroundColor: 'white',
        flexGrow: 1,
        flexShrink: 1
    }),
    item: RX.Styles.createViewStyle({
        margin: 4,
        padding: 4
    }),
    author: RX.Styles.createTextStyle({
        fontSize: 11,
        color: "blue"
    }),
    time: RX.Styles.createTextStyle({
        fontSize: 11,
        color: "grey"
    })
};

export class ChatList extends RX.Component<ChatListProps, {}> {
    render() {
        const items = this.props.messages.map((item: Message) => {
            return (
                <RX.View key={item.id} style={ _styles.item }>
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
