import RX = require('reactxp');

import { Message } from "./ChatPanel";

interface ChatListProps {
    messages?: Message[];
}

export class ChatList extends RX.Component<ChatListProps, {}> {
    constructor(props: {}) {
        super(props);
    }
    render() {
        const items = this.props.messages.map((item: Message) => {
            return (
                <RX.Text key={item.id}>
                    {item.text} : {item.id}
                </RX.Text>
            )
        });

        return (
            <RX.View>
                {items}
            </RX.View>
        );
    }
}
