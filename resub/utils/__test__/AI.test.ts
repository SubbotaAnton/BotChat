import { getAIAnswer } from "../AI";

describe("getAIAnswer", () => {
    const greetingAnswers = ["Hello", "Hi"];
    const unknownPhrase = ["Sorry, I can't understand you", "Could you repeat it, please?"];

    it("has to react on phrase correctly", () => {
        const phrase = "Hello";
        expect(greetingAnswers.join(" ")).toContain(getAIAnswer(phrase));
    });

    it("has to react on phrase correctly, if we have other words and commas", () => {
        const phrase = ",Hello, blablabla";
        expect(greetingAnswers.join(" ")).toContain(getAIAnswer(phrase));
    });

    it("has to not take part of words", () => {
        const phrase = "Phello";
        expect(unknownPhrase.join(" ")).toContain(getAIAnswer(phrase));
    });
});