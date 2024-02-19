import { FC, useEffect, useRef, useState } from "react";

const Theme: FC = () => {
    const [startOffset, setStartOffset] = useState("1200px");
    const textPathRef = useRef<SVGTextPathElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const h = document.documentElement;
            const b = document.body;
            const st = 'scrollTop';
            const sh = 'scrollHeight';
            const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
            setStartOffset((-percent * 40 + 1200) + "px");
        };

        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

const Theme: FC = () => {
    return (
        <svg width="100%" height="160px" viewBox="0 0 1098.72 89.55">
            <path id="curve" fill="transparent" d="M0.17,0.23c0,0,105.85,77.7,276.46,73.2s243.8-61.37,408.77-54.05c172.09,7.64,213.4,92.34,413.28,64.19"></path>
            <text width="100%" style={{ transform: 'translate3d(0,0,0)' }}>
                <textPath ref={textPathRef} style={{ transform: 'translate3d(0,0,0)' }} alignmentBaseline="auto" xlinkHref="#curve" startOffset={startOffset} id="text-path">*The pictures are not technically selfies.</textPath>
            </text>
        </svg>
    );
};

export default Theme;
