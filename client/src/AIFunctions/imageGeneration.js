const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-DeCq4aUYk7qBHQqx45W9bTxz",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();



export const sendQuery = ()=> {

}