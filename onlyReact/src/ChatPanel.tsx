import RX = require('reactxp');

import { UserInput } from './UserInput';
import { ChatList } from  './ChatList';
import { getAIAnswer } from '../../utils/AI';

export interface Message {
    text: string;
    id: number;
    author: string;
    timestamp: string;
}

interface ChatPanelState {
    messages: Message[];
}

const _styles = {
    listContainer: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch'
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
            <RX.View style={ _styles.listContainer }>
                <UserInput onSubmit={this.onSubmit}/>
                <ChatList messages={this.state.messages} />
            </RX.View>
        )
    }

    onSubmit(text: string) {
        this.setState((prevState: ChatPanelState) => {
            return {
                messages: [{
                    text,
                    id: prevState.messages.length,
                    author: "You",
                    timestamp: this._getTime()
                }].concat(prevState.messages)
            }
        });

        setTimeout(() => {
            this.setState((prevState: ChatPanelState) => {
                return {
                    messages: [{
                        text: getAIAnswer(text),
                        id: prevState.messages.length,
                        author: "Bot",
                        timestamp: this._getTime()
                    }].concat(prevState.messages)
                }
            })
        }, Math.random() * 2000);
    }

    _getTime():string {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();
        return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }
}
