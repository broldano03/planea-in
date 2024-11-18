import { useState } from "react";

export default function ChatBox() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSendMessage = async () => {
        if (input.trim()) {
            setMessages([...messages, { author: 'user', content: input }]);
            setInput("");

            const response = await fetch(import.meta.env.VITE_API_URL + '/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: input,
                    history: messages
                })
            });
            const json = await response.json();

            console.log(json.response);

            setMessages(messages => [ ... messages, { author: 'bot', content: json.response }])
        }
    };

    return (
        <div className="fixed bottom-2 right-2" onClick={() => setOpen(!open)}>
            {!open ? (
                <div className="w-16 h-16 bg-customBlue rounded-full cursor-pointer flex items-center justify-center text-white text-xl font-bold">
                    💬
                </div>
            ) : (
                <div className="w-80 h-96 bg-white shadow-lg rounded-lg p-4 relative" onClick={(e) => e.stopPropagation()}>
                    {/* Header with close button */}
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Asistente AI</h3>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={() => setOpen(false)}
                        >
                            ✖
                        </button>
                    </div>

                    {/* Messages section */}
                    <div className="flex flex-col space-y-2 overflow-y-auto h-64 mb-4">
                        {messages.length > 0 ? (
                            messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={"p-2 rounded-md text-sm text-black" + (message.author === 'user' ? 'text-right bg-gray-200' : 'text-left bg-slate-300')}
                                >
                                    {message.content}
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400 text-center"></p>
                        )}
                    </div>

                    {/* Input section */}
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue"
                            placeholder="Escribe un mensaje..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            className="px-4 py-2 bg-customBlue text-white rounded-md hover:bg-blue-600"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleSendMessage();
                            }}
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
