
import React, {useEffect, useState} from "react";

function App() {

    const [url, setUrl] = useState();
    const [currentUrl, setCurrentUrl] = useState('https://cardano.org');


    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            let finalUrl = url;
            if (url.substring(0, 3) === 'www') {
                finalUrl = 'https://' + url;
            }
            setCurrentUrl(finalUrl);
        }
    }

    function handleUrl(url) {
        setUrl(url);
    }

    return (
        <div className="main bg-base-100">
            <div className="header">
                <div className="flex m-2">
                    <button className="btn btn-square btn-outline mr-2 border-neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                    <button className="btn btn-square btn-outline mr-2 border-neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                    <button className="btn btn-square btn-outline mr-2 border-neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </button>
                    <label className="input input-bordered flex items-center gap-2 w-1/2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="text" className="grow" placeholder="Search" onKeyDown={handleKeyDown} onChange={(e) => handleUrl(e.target.value)} />
                    </label>
                </div>

            </div>
            <div className="content">
                <webview id="moo" className='web' src={currentUrl}></webview>
            </div>
        </div>
    )
}

export default App

