import RX = require('reactxp');
import { ComponentBase } from 'resub';
import { VirtualListView, VirtualListViewItemInfo } from 'reactxp-virtuallistview';

import { default as ChatStore, Message } from './ChatStore';

interface MessageListMessageInfo extends VirtualListViewItemInfo {
    message: Message;
}

interface MessageListState {
    messageItems?: MessageListMessageInfo[];
}

const _itemHeight = 100;

class ChatList extends ComponentBase<{}, MessageListState> {
    protected _buildState(props: {}, initialBuild: boolean): MessageListState {
        return {
            messageItems: ChatStore.getMessages().map(message => {
                return {
                    key: message.id.toString(),
                    height: _itemHeight,
                    template: 'image',
                    message
                };
            })
        };
    }

    render() {
        // If the search is pending, render a spinner.
        return (
            <VirtualListView
                itemList={ this.state.messageItems }
                renderItem={ this._renderItem }
            />
            );
    }

    private _renderItem = (item: MessageListMessageInfo) => {
        return (
            <RX.View>
                <RX.Text>
                    {item.message.text}
                </RX.Text>
            </RX.View>
        );
    }
}

export = ChatList;