import Image from 'next/image';

const ArtworkImage = ({ className, src }: { className: string; src: string }) => (
    <div className={`relative ${className}`}>
        <Image className="object-contain" src={`/images/sources/${src}`} alt="" fill />
    </div>
);

export default function Home() {
    return (
        <main>
            <section className="relative h-screen">
                <section className="grid grid-cols-3 grid-rows-3 w-full h-full absolute">
                    <ArtworkImage
                        className="col-start-1 col-span-1 row-start-1 row-span-1 scale-150 -translate-y-2/3"
                        src="mix_brush.png"
                    />
                    <ArtworkImage
                        className="col-start-3 col-span-1 row-start-1 row-span-1 scale-150 translate-x-1/4 -translate-y-1/3"
                        src="blue_brush_3.png"
                    />
                    <ArtworkImage
                        className="col-start-1 col-span-1 row-start-2 row-span-1 scale-150 -translate-x-1/3"
                        src="blue_brush.png"
                    />
                    <ArtworkImage
                        className="col-start-3 col-span-1 row-start-2 row-span-1 scale-150 translate-y-1/4"
                        src="green_brush.png"
                    />
                    <ArtworkImage
                        className="col-start-1 col-span-1 row-start-3 row-span-1 scale-150 -translate-x-2/3 translate-y-2/3"
                        src="pink_brush.png"
                    />
                    <ArtworkImage
                        className="col-start-2 col-span-1 row-start-3 row-span-1 scale-150 -translate-x-1/2 translate-y-1/4"
                        src="yellow_brush.png"
                    />
                    <ArtworkImage
                        className="col-start-3 col-span-1 row-start-3 row-span-1 scale-150 translate-x-1/2 translate-y-1/4"
                        src="blue_brush_2.png"
                    />
                </section>
                <section className="grid grid-cols-3 grid-rows-3 w-full h-full absolute">
                    <ArtworkImage
                        className="col-start-1 col-span-2 row-start-1 row-span-2 scale-150 -translate-y-1/4"
                        src="line_1.png"
                    />
                    <ArtworkImage
                        className="col-start-3 col-span-1 row-start-1 row-span-2 scale-150 translate-x-1/2"
                        src="line_2.png"
                    />
                    <ArtworkImage
                        className="col-start-1 col-span-1 row-start-3 row-span-1 scale-150 -translate-x-1/2"
                        src="line_3.png"
                    />
                    <ArtworkImage
                        className="col-start-2 col-span-3 row-start-3 row-span-1 scale-150 translate-y-1/3"
                        src="line_4.png"
                    />
                </section>
                <section className="flex flex-col items-center justify-center h-full">
                    <div className="flex-1 flex flex-col items-center justify-center ko-font">
                        <h1 className="text-9xl scale-125 tracking-tighter mb-20 blur-md hover:blur-none transition duration-700 ease-out">
                            <div>선 위의</div>
                            <div>여성들</div>
                        </h1>
                        <p className="text-4xl tracking-tighter text-center whitespace-pre-line blur hover:blur-none transition duration-700 ease-out">
                            {'"훌륭한 그림은\n방금 일어난 일처럼 보인다."'}
                        </p>
                    </div>
                    <p className="z-10 en-font text-md tracking-tight leading-5 text-center whitespace-pre-line mb-20">
                        {'We think about the warm thing that we can make for adults and children.\n' +
                            'We use quite variety of genres, such as illustration work, textual art, or publishing, to record what comes in meaning.\n' +
                            'We hope something exciting happens.'}
                    </p>
                </section>
            </section>
        </main>
    );
}
