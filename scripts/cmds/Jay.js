module.exports = {
    config: {
        name: "jay",
        version: "1.0",
        author: "Jay Senpai",
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
        if (lowerCaseBody.includes("jay") || lowerCaseBody.includes("jay d bohol") ||
lowerCaseBody.includes("bohol") ||
lowerCaseBody.includes("Jay D Bohol")) {
            return message.reply(`busy pa master ko`);
        }
    }
};
