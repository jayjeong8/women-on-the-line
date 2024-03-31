import BgArtworks from '@/app/components/bgArtworks';
import MainTypographies from '@/app/components/mainTypographies';

export default function Home() {
    return (
        <main>
            <BgArtworks />
            <section className="h-screen">
                <MainTypographies />
            </section>
        </main>
    );
}
