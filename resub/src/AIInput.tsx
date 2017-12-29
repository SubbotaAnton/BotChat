import {ComponentBase} from "resub";
import {default as ChatStore, Message} from "./ChatStore";

interface MessageListState {
    messageItems?: Message[];
}

class AIInput extends ComponentBase<{}, {}> {
    protected _buildState(props: {}, initialBuild: boolean): MessageListState {
        return {
            messageItems: ChatStore.getMessages()
        };
    }

    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log(nextState);
        return false;
    }

    render() {
        return "";
    }
}

export = AIInput;