const axios = require("axios");

const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
const SLACK_CHANNEL = "#your-channel"; // Replace with your Slack channel

const message = {
  channel: SLACK_CHANNEL,
  text: "New commit pushed to the repository!",
};

axios
  .post("https://slack.com/api/chat.postMessage", message, {
    headers: {
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    console.log("Slack notification sent successfully:", response.data);
  })
  .catch((error) => {
    console.error("Error sending Slack notification:", error.message);
    process.exit(1);
  });
