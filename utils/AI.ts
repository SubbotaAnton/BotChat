enum Messages { Greetings, Name, Feeling }

const MessageIn = { // keywords of question
    [Messages.Greetings]: ["hello", "hi"],
    [Messages.Name]: ["name"],
    [Messages.Feeling]: ["how are u", "how are you", "what's up"]
};

const MessageOut = { // answers
    [Messages.Greetings]: ["Hello", "Hi"],
    [Messages.Name]: ["My name is Bot", "I am Bot"],
    [Messages.Feeling]: ["I am fine, thank you!", "Super!"]
};

const MessageDefaultOut = "Sorry, I can't understand you";

function containWord(word: string, msg: string): boolean {
    const pattern = new RegExp(`((.*\\s|,|/.|-|/?)|^)${word}((\\s|,|/.|-|/?.*)|$)`, "i");
    return pattern.test(msg);
}

function getAIAnswer(msg: string): string {
    for (let key in MessageIn) {
        const pattern = (MessageIn as any)[key];
        for (let i = 0; i < pattern.length; i++) {
            if (containWord(pattern[i], msg)) {
                const answer = (MessageOut as any)[key] || [];
                return answer[Math.floor(Math.random() * answer.length)]; // return random specific answer
            }

        }
    }

    return MessageDefaultOut;
}

export { getAIAnswer };
