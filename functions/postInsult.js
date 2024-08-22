const { sendResponse } = require('../responses/index');

function checkBody(body) {
    if (body?.insult && body?.play) return true;
    else return false;
}

function postInsult(insults, body) {
    if (checkBody(body)) {
        insults.push(body);

        return sendResponse(200, { success: true });
    } else {
        return sendResponse(400, { message: 'Wrong data in body' });
    }
}

module.exports = { postInsult }