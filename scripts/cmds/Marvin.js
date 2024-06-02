module.exports = {
    config: {
        name: "Marvin",
        version: "1.0",
        author: "Owner",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        const lowerCaseBody = event.body.toLowerCase();
        if (lowerCaseBody.includes("marvin") || lowerCaseBody.includes("marvin hiponia") ||
lowerCaseBody.includes("hiponia") ||
lowerCaseBody.includes("Marvin Hiponia")) {
            return message.reply(`Kailangan mo kay master Marvin Hiponia`);
        }
    }
};
