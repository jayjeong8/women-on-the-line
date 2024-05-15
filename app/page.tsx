import BgArtworks from '@/app/components/bgArtworks';
import MainTypographies from '@/app/components/mainTypographies';
import MainArts from '@/app/components/mainArts';

export default function Home() {
    return (
        <main>
            <BgArtworks />
            <section>
                <MainTypographies />
                <MainArts />
            </section>
            <section className="w-screen h-screen fixed inset-0 z-10">
                <div className="dimmed bg-black/30 w-full h-full absolute" />
                <section className="flex w-1/2 h-2/3 absolute inset-0 m-auto p-2 gap-2 bg-white rounded shadow-lg">
                    <div className="w-auto h-full aspect-2/3 rounded border-2 border-gray-400">
                        <canvas width="400" height="800" className="w-full h-full" />
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
        </main>
    );
}
