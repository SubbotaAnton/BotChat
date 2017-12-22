/**
* Basic store based on ReSub.
*/

import { StoreBase, AutoSubscribeStore, autoSubscribe } from 'resub';

export interface Message {
    id: number;
    text: string;
    author: string;
}

@AutoSubscribeStore
export class ChatStore extends StoreBase {
    private _messages: Message[] = [];

    @autoSubscribe
    getMessages() {
        return this._messages;
    }

    submitMessage(text: string) {
        this._messages = this._messages.concat({
            text,
            author: "human",
            id: this._messages.length
        });

        this.trigger();

    }
}

export default new ChatStore();