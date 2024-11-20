import {useEffect, useRef, useState} from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid/index.js";

// Messages the user could send to the AI
const messageSuggestions = [
    `Di 'hola'!`,
    '¿Cuál es mi progreso?',
    'Escribe un mensaje...',
    '¿Qué puedo hacer?',
    '¿Cuál es mi siguiente tarea?',
    '¿Qué tengo pendiente?',
    '¿Qué se me asignó?',
];

function Message({ author, content }) {
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, []);
    return (
        <div className="flex flex-col w-full pb-4" ref={ref}>
            <div className={'py-1.5 px-3 w-fit rounded-xl shadow-sm ' + (author === 'user'
                ? 'text-right self-end bg-white rounded-br-none'
                : 'text-left self-start bg-slate-300')}>
                {content}
            </div>
        </div>
    );
}

function TypingIndicator() {
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, []);
    return (
        <div className="flex items-center text-gray-700 text-left text-xs pb-4" ref={ref}>
            Asistente escribiendo...
        </div>
    );
}

export default function ChatBox() {
    const [ open, setOpen ] = useState(false);
    const [ messages, setMessages ] = useState([]);
    const [ input, setInput ] = useState("");
    const [ waitingForMessage, setWaitingForMessage ] = useState(false);

    const handleSendMessage = async () => {
        if (!input.trim()) return;
        setMessages([...messages, {author: 'user', content: input}]);
        setInput("");

        setWaitingForMessage(true);
        fetch(import.meta.env.VITE_API_URL + '/chat', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                message: input,
                history: messages
            })
        })
            .then(response => response.json())
            .then(json => {
                setMessages(messages => [...messages, {author: 'bot', content: json.response}]);
                setWaitingForMessage(false);
            });
    };

    useEffect(() => {
        const onKeyDown = e => {
            // close on escape key
            if (e.keyCode === 27 && open) {
                setOpen(false);
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [ open, setOpen ]);

    return (
        <div className="fixed bottom-4 right-4" onClick={() => setOpen(!open)}>
            {!open ? (
                <div className="w-16 h-16 bg-customBlue rounded-full cursor-pointer flex items-center justify-center text-white text-xl font-bold">
                    💬
                </div>
            ) : (
                <div className="flex overflow-hidden flex-col justify-around w-96 h-[30rem] bg-slate-100 border border-solid border-white/60 shadow-2xl rounded-lg relative" onClick={(e) => e.stopPropagation()}>
                    {/* Header with close button */}
                    <div className="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
                        <h3 className="text-lg font-semibold">Asistente AI</h3>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={() => setOpen(false)}
                        >
                            ✖
                        </button>
                    </div>

                    {/* Messages section */}
                    <div className="flex flex-1 flex-col overflow-y-auto h-64 pt-4 px-4">
                        {messages.length > 0 ? (
                            messages.map((message, index) => (
                                <Message key={index} author={message.author} content={message.content} />
                            ))
                        ) : (
                            <p className="text-gray-400 text-center text-sm mt-6">
                                ¡Empieza una conversación con el asistente AI!
                            </p>
                        )}

                        {waitingForMessage && <TypingIndicator />}
                    </div>

                    {/* Input section */}
                    <form className="flex items-center border-t border-solid border-white/20 shadow-2xl" onSubmit={() => false}>
                        <input
                            type="text"
                            className="w-full px-6 py-4 rounded-bl-lg border-none"
                            placeholder={messageSuggestions[Math.floor(Math.random() * messageSuggestions.length)]}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 text-slate-500 bg-white rounded-br-md hover:bg-blue-600 hover:text-white h-full"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleSendMessage();
                                return false;
                            }}
                        >
                            <PaperAirplaneIcon width="20" />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
