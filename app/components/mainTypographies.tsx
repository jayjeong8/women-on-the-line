export default function MainTypographies() {
    return (
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
    );
}
