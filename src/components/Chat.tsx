"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Chat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input, userId: "test-user" }),
    });

    const { reply } = await res.json();
    setMessages([
      ...messages,
      userMessage,
      { role: "assistant", content: reply },
    ]);
    setInput("");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded-lg">
      <h1 className="text-2xl font-bold mb-4">AI Chatbot</h1>
      <div className="space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg ${
              msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <Input
          value={input}
          onChange={(e: any) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}
