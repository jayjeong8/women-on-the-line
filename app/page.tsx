import Image from "next/image";

export default function Home() {
    return (
        <main>
            <section className="grid grid-cols-3 grid-rows-3 h-screen">
                <div className="col-start-1 col-span-1 row-start-1 row-span-1 relative">
                    <Image className="object-contain" src="/images/sources/mix_brush.png" alt="" fill/>
                </div>
                <div className="col-start-3 col-span-1 row-start-1 row-span-1 relative">
                    <Image className="object-contain" src="/images/sources/blue_brush_3.png" alt="" fill/>
                </div>
                <div className="col-start-1 col-span-1 row-start-2 row-span-1 relative">
                    <Image className="object-contain" src="/images/sources/blue_brush.png" alt="" fill/>
                </div>
                <div className="col-start-3 col-span-1 row-start-2 row-span-1 relative">
                    <Image className="object-contain" src="/images/sources/green_brush.png" alt="" fill/>
                </div>
                <div className="col-start-1 col-span-1 row-start-3 row-span-1 relative">
                    <Image className="object-contain" src="/images/sources/pink_brush.png" alt="" fill/>
                </div>
                <div className="col-start-2 col-span-1 row-start-3 row-span-1 relative">
                    <Image className="object-contain" src="/images/sources/yellow_brush.png" alt="" fill/>
                </div>
                <div className="col-start-3 col-span-1 row-start-3 row-span-1 relative">
                    <Image className="object-contain" src="/images/sources/blue_brush_2.png" alt="" fill/>
                </div>
            </section>
        </main>
    );
}
