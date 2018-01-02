import RX = require('reactxp');

import { ChatPanel } from "./ChatPanel";

class App {
    init() {
        RX.App.initialize(true, true);
        RX.UserInterface.setMainView(this._renderRootView());
    }

    private _renderRootView() {
        return (
            <ChatPanel />
        );
    }
}

const app = new App();

export { app };