import ArtworkImage from '@/app/components/artworkImage';

export default function BgArtworks() {
    return (
        <>
            <section className="grid grid-cols-3 grid-rows-3 w-full h-full absolute">
                <ArtworkImage
                    className="col-start-1 col-span-1 row-start-1 row-span-1 scale-150 -translate-y-2/3"
                    src="sources/mix_brush.png"
                />
                <ArtworkImage
                    className="col-start-3 col-span-1 row-start-1 row-span-1 scale-150 translate-x-1/4 -translate-y-1/3"
                    src="sources/blue_brush_3.png"
                />
                <ArtworkImage
                    className="col-start-1 col-span-1 row-start-2 row-span-1 scale-150 -translate-x-1/3"
                    src="sources/blue_brush.png"
                />
                <ArtworkImage
                    className="col-start-3 col-span-1 row-start-2 row-span-1 scale-150 translate-y-1/4"
                    src="sources/green_brush.png"
                />
                <ArtworkImage
                    className="col-start-1 col-span-1 row-start-3 row-span-1 scale-150 -translate-x-2/3 translate-y-2/3"
                    src="sources/pink_brush.png"
                />
                <ArtworkImage
                    className="col-start-2 col-span-1 row-start-3 row-span-1 scale-150 -translate-x-1/2 translate-y-1/4"
                    src="sources/yellow_brush.png"
                />
                <ArtworkImage
                    className="col-start-3 col-span-1 row-start-3 row-span-1 scale-150 translate-x-1/2 translate-y-1/4"
                    src="sources/blue_brush_2.png"
                />
            </section>
            <section className="grid grid-cols-3 grid-rows-3 w-full h-full absolute">
                <ArtworkImage
                    className="col-start-1 col-span-2 row-start-1 row-span-2 scale-150 -translate-y-1/4"
                    src="sources/line_1.png"
                />
                <ArtworkImage
                    className="col-start-3 col-span-1 row-start-1 row-span-2 scale-150 translate-x-1/2"
                    src="sources/line_2.png"
                />
                <ArtworkImage
                    className="col-start-1 col-span-1 row-start-3 row-span-1 scale-150 -translate-x-1/2"
                    src="sources/line_3.png"
                />
                <ArtworkImage
                    className="col-start-2 col-span-3 row-start-3 row-span-1 scale-150 translate-y-1/3"
                    src="sources/line_4.png"
                />
            </section>
        </>
    );
}
