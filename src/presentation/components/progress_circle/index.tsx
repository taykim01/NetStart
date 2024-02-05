import { useState, useEffect } from 'react';
import "./progress_circle.css"

function ProgressCircle(props: any) {
    const [offset, setOffset] = useState(0);
    const size = 80;
    const strokeWidth = 8;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((4 - props.progress) / 4) * circumference;
        setOffset(progressOffset);
    }, [setOffset, circumference, props.progress, offset]);

    return (
        <svg
            width={size}
            height={size}>
            <g transform={`rotate(-90 ${center} ${center})`}>
                <circle
                    className="progress_ring-circle"
                    stroke="var(--grey-200)"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    r={radius}
                    cx={center}
                    cy={center} />
                <circle
                    className="progress_ring-circle"
                    stroke="var(--main-500)"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={`${circumference} ${circumference}`}
                    style={{ strokeDashoffset: offset }}
                    r={radius}
                    cx={center}
                    cy={center} />
            </g>
            <text className='h6' x="50%" y="50%" textAnchor="middle" dy=".3em" fill="var(--grey-700)">{`${props.progress} / 4`}</text>
        </svg>
    );
}

export default ProgressCircle;
