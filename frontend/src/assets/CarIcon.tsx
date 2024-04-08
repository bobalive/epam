import React, {forwardRef, SVGProps} from "react";


export const CarIcon: React.FC<SVGProps<SVGSVGElement>> = forwardRef((props,ref) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            {...props}
            ref = {ref}
        >
            <path
                d="M48.9 28.8c-1.2-2.9-1.1-4.5-2.7-5.3-4.3-2.1-4.4-2.3-5.3-2.5-3.6-.6-6.8-.7-9.6-.5-.3 0-.6 0-.9-.2-8.1-4.6-15.1-4.8-20.9-.5-.3.3-.6.4-1.2.5V18l.7-.1c.5-.1.9-.6.8-1.1-.1-.5-.6-.9-1.1-.8l-6.1 1c-.5 0-.9.5-.8 1 .1.5.6.9 1.1.8l.8-.1v2.5c-1 .5-1.5 1.4-1.9 2.1-.2.3-.3.6-.5.8-.4.7-.3.8-.3 4.3 0 1.8 1.4 3.2 3.2 3.2h3.5c.8 1.5 2.4 2.5 4.2 2.5s3.4-1 4.2-2.5h19.3c.8 1.5 2.4 2.5 4.2 2.5 1.8 0 3.4-1 4.2-2.5h3c.7 0 1.3-.3 1.7-.9.5-.5.6-1.3.4-1.9zm-20.5-7.3-.6.3c-.4.2-.8.2-1.1.2l-7.7-.8v-2.4c2.9 0 6 .9 9.4 2.7zM17 20.9c-.1 0-.2 0-.2-.1l-2-1.5c.7-.2 1.5-.4 2.3-.5v2.1zM6.4 18.3v2.3c-.2 0-.4.1-.6.1v-2.3l.6-.1zm5.5 13.8c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9 1.6 0 2.9 1.3 2.9 2.9 0 1.6-1.3 2.9-2.9 2.9zm27.8 0c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9 1.6 0 2.9 1.3 2.9 2.9-.1 1.6-1.4 2.9-2.9 2.9zm7.2-2.5h-2.4v-.4c0-2.7-2.2-4.9-4.9-4.9s-4.9 2.2-4.9 4.9v.4h-18v-.4c0-2.7-2.2-4.9-4.9-4.9S7 26.5 7 29.2v.4H4.2c-.7 0-1.2-.5-1.2-1.2V26l3.1-.2c.6 0 1-.5.9-1.1 0-.6-.5-1-1.1-.9l-2.1.2c.4-.6.7-1 1.4-1.1 1.2-.2 2-.3 2.7-.4 1.3-.2 2-.3 2.9-1 .6-.5 1.2-.8 1.8-1.2l3 2.2c.4.3.8.5 1.3.5 9.7 1 9.6 1 9.9 1 .6 0 1.2-.1 1.8-.4l2.1-1.1h.7c2.7-.2 5.7 0 9.1.5.4.1.3.1 4.7 2.3.2.1.3.2.3.4l1.3 3.8.1.1z"
                fill={props.color}
                className="color000 svgShape"
            ></path>
            <path
                d="M22.1 24.3h-1.2c-.6 0-1 .4-1 1s.4 1 1 1h1.2c.6 0 1-.4 1-1 0-.5-.4-1-1-1z"
                fill={props.color}
                className="color000 svgShape"
            ></path>
        </svg>
    );
})