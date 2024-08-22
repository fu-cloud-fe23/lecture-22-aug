const { sendResponse } = require('./responses/index');
const { postInsult } = require('./functions/postInsult');

const insults = [
    {
        insult: "Never hung poison on a fouler toad",
        play: "Rickard III"
    },
    {
        insult: "He thinks too much: such men are dangerous. ",
        play: "Julius Ceasar"
    }
];

exports.handler = async (event, context) => {
    console.log(event);
    const { method, path } = event.requestContext.http;

    if (method === 'GET' && path === '/insult') {
        // Hämta alla insults
        return sendResponse(200, { insults });
    } else if(method === 'POST' && path === '/insult') {
        // Spara en ny insult
        const body = JSON.parse(event.body);

        return postInsult(insults, body);
    } else {
        // Hantera fel
        return sendResponse(404, { message: 'URL not existent' });
    }
};