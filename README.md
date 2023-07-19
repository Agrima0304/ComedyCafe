This is a API-based project that named ComedyCafe. It uses a JOKE API that gives you a new joke every time.

So I have integrated it with a google chrome extension by which you can click every time and get a new joke.

API Documentation: https://icanhazdadjoke.com/api

API link: https://icanhazdadjoke.com/slack

In response you will get:

{
  "attachments": [
    {
      "fallback": "My first time using an elevator was an uplifting experience. The second time let me down.",
      "footer": "<https://icanhazdadjoke.com/j/1DQZvXvX8Ed|permalink> - <https://icanhazdadjoke.com|icanhazdadjoke.com>",
      "text": "My first time using an elevator was an uplifting experience. The second time let me down."
    }
  ],
  "response_type": "in_channel",
  "username": "icanhazdadjoke"
}

We are interested in the text part in the response, so extract it using Javascript and replace with your HTML and show it on the extension.

There after the stying has been done on the popup html page and style.css has been attached to it.
