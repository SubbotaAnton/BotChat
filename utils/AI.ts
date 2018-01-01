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

const MessageDefaultOut = ["Sorry, I can't understand you", "Could you repeat it, please?"];

function containWord(word: string, msg: string): boolean {
    const pattern = new RegExp(`((.*\\s|,|/.|-|/?)|^)${word}((\\s|,|/.|-|/?.*)|$)`, "i");
    return pattern.test(msg);
}

function chooseAnswer(answers: string[]):string {
    return answers[Math.floor(Math.random() * answers.length)]; // return random specific answer
}

function getAIAnswer(msg: string): string {
    for (let key in MessageIn) {
        const pattern = (MessageIn as any)[key];
        for (let i = 0; i < pattern.length; i++) {
            if (containWord(pattern[i], msg)) {
                return chooseAnswer((MessageOut as any)[key] || []);
            }
        }
    }

    return chooseAnswer(MessageDefaultOut);
}

export { getAIAnswer };
