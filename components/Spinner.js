import React from 'react'

const Spinner = () => {
    return (
        <>
            <style jsx>{`
                .spinner {
                    position: absolute;
                    display: inline-block;
                    height: 40px;
                    width: 40px;
                    border: 3px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    border-top-color: #fff;
                    animation: spinner-anim 1s ease-in-out infinite;
                }
                
                @keyframes spinner-anim {
                    0% {
                        transform: rotate(0deg);
                    }
                    30% {
                        transform: rotate(20deg);
                    }
                    40% {
                        transform: rotate(0deg);
                    }
                    70% {
                        transform: rotate(-20deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
            <div className='spinner'></div>
        </>
    )
}

export default Spinner