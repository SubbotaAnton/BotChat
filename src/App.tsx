import RX = require('reactxp');
import ChatPanel = require('./ChatPanel');

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

export = new App();