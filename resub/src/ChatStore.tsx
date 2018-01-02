/**
* Basic store based on ReSub.
*/

import { StoreBase, AutoSubscribeStore, autoSubscribe } from 'resub';
import { getAIAnswer } from "../utils/AI";

export interface Message {
    text: string;
    id: number;
    author: string;
    timestamp: string;
}

@AutoSubscribeStore
export class ChatStore extends StoreBase {
    private _messages: Message[] = [];

    @autoSubscribe
    getMessages() {
        return this._messages;
    }

    submitMessage(text: string) {
        this._messages = [{
            text,
            id: this._messages.length,
            author: "You",
            timestamp: this._getTime()
        }].concat(this._messages);

        this.trigger();

        setTimeout(() => {
            this._messages = [{
                text: getAIAnswer(text),
                id: this._messages.length,
                author: "Bot",
                timestamp: this._getTime()
            }].concat(this._messages);

            this.trigger();
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

export default new ChatStore();