import RX = require('reactxp');

import { Message } from "./ChatPanel";

interface ChatListProps {
    messages?: Message[];
}

class ChatList extends RX.Component<ChatListProps, {}> {
    constructor(props: {}) {
        super(props);
    }
    render() {
        const items = this.props.messages.map((item: Message) => {
            return (
                <RX.View key={item.id}>
                    <RX.Text>
                        {item.text} : {item.id}
                    </RX.Text>
                </RX.View>
            )
        });

        return (
            <RX.View>
                {items}
            </RX.View>
        );
    }
}

export = ChatList;