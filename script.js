// sendtelegram
function sendtelegram(message) {
  let telegram_bot_id = "6486417954:AAHijIqaZGoScVrlOFLEmSO5zkFCppPFuB0";
  let chat_id = 700727696;
  let settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({ chat_id: chat_id, text: message }),
  };
  $.ajax(settings).done(function (response) {});
}

function send() {
    let username = document.getElementById("username").value;
    let age = document.getElementById("age").value;
  sendtelegram(`Ismi: ${username} va Yoshi: ${age}`);
}
