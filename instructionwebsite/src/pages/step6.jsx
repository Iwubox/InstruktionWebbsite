import React from "react";
import { motion } from "motion/react";

const Step6 = () => {
  return <body>

    <p>step 6</p>
    <p> Coding your AI chatbot</p>

    <p> Open your code editor and copy the following code:</p>
    <p>import openai</p>
    <p>import gradio as gr</p>
    <p></p>
    <p>openai.api_key = "Enter you api key here"</p>
    <p>messages = [
    {"role": "system", "content": "You are a helpful and kind AI Assistant."},
]   </p>
<p> def chatbot(input):</p>
<p>    if input:</p>
<p>        messages.append({"role": "user", "content": input})</p>
<p>chat = openai.ChatCompletion.create(
            model="gpt-3.5-turbo", messages=messages
        )</p>
        <p>        reply = chat.choices[0].message.content</p>
        <p>        messages.append({"role": "assistant", "content": reply})</p>
        <p>        return reply</p>
        <p></p>
        <p>inputs = gr.inputs.Textbox(lines=7, label="Chat with AI")</p>
        <p>outputs = gr.outputs.Textbox(label="Reply")</p>
        <p></p>
        <p>gr.Interface(fn=chatbot, inputs=inputs, outputs=outputs, title="AI Chatbot",description="Ask anything you want",
             theme="compact").launch(share=True)</p>

      <p>After copying this code replace Enter you api key here with your api key</p>


  </body>;
};

export default Step6;
