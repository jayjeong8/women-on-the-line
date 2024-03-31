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
        </main>
    );
}
