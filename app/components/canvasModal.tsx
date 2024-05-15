'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CanvasModal() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [currentColor, setCurrentColor] = useState('black');
    const [lineWidth, setLineWidth] = useState(3);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = canvas.parentElement!.clientWidth;
        canvas.height = canvas.parentElement!.clientHeight;

        const ctx = canvas.getContext('2d');
        setContext(ctx);
    }, []);

    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!context) return;

        context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
    };

    const finishDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!context) return;

        setIsDrawing(false);
    };

    const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing || !context) return;

        context.lineCap = 'round';
        context.strokeStyle = currentColor;
        context.lineWidth = lineWidth;

        context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        context.stroke();
    };

    return (
        <section className="w-screen h-screen fixed inset-0 z-10">
            <div className="dimmed bg-black/30 w-full h-full absolute" />
            <section className="flex w-1/2 h-2/3 absolute inset-0 m-auto p-2 gap-2 bg-white rounded shadow-lg">
                <div className="w-auto h-full aspect-2/3 rounded border-2 border-gray-400">
                    <canvas ref={canvasRef} onMouseDown={startDrawing} onMouseMove={draw} onMouseUp={finishDrawing} />
                </div>
                <div className="w-full h-full">
                    <textarea
                        placeholder="당신의 이야기를 들려주세요."
                        rows={7}
                        required
                        wrap="hard"
                        className="w-full p-2 rounded border-2 border-gray-400 ko-font"
                    />
                </div>
            </section>
        </section>
    );
}
