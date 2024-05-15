import BgArtworks from '@/app/components/bgArtworks';
import MainTypographies from '@/app/components/mainTypographies';
import MainArts from '@/app/components/mainArts';
import CanvasModal from '@/app/components/canvasModal';

export default function Home() {
    return (
        <main>
            <BgArtworks />
            <section>
                <MainTypographies />
                <MainArts />
            </section>
            <CanvasModal />
        </main>
    );
}
