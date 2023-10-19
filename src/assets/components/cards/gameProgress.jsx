import React, { useEffect, useRef } from 'react';

export function ProgressBar({ valorVariavel }) {
    const progressBarRef = useRef(null);

    useEffect(() => {
        const largura = `${valorVariavel * 1.5}%`;
        progressBarRef.current.style.width = largura;
    }, [valorVariavel]);

    return (
        <div className="gprogress-bar">
            <div className="gprogress-value"><p>{valorVariavel+'%'}</p></div>
            <div className="gprogress-fill" ref={progressBarRef}></div>
        </div>
    );
};

