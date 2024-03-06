import Image from "next/image";

export default function Home() {
    return (
        <main>
            <section className="grid grid-cols-3 grid-rows-3 h-screen">
                <div className="col-start-1 col-span-1 row-start-1 row-span-1">
                    <Image className="max-w-5xl -translate-x-12 -translate-y-2/3"
                           src="/images/sources/mix_brush.png"
                           alt="" width="900" height="0"/>
                </div>
                <div className="col-start-3 col-span-1 row-start-1 row-span-1">
                    <Image className="max-w-6xl -translate-x-1/3 -translate-y-2/3"
                           src="/images/sources/blue_brush_3.png"
                           alt="" width="1200" height="0"/>
                </div>
                <div className="col-start-1 col-span-1 row-start-2 row-span-1">
                    <Image className="max-w-2xl -translate-x-1/2 -translate-y-44"
                           src="/images/sources/blue_brush.png"
                           alt="" width="700" height="0"/>
                </div>
                <div className="col-start-3 col-span-1 row-start-2 row-span-1">
                    <Image className="max-w-3xl"
                           src="/images/sources/green_brush.png"
                           alt="" width="550" height="0"/>
                </div>
                <div className="col-start-1 col-span-1 row-start-3 row-span-1">
                    <Image className="max-w-4xl -translate-x-1/2 translate-y-1/2"
                           src="/images/sources/pink_brush.png"
                           alt="" width="1000" height="0"/>
                </div>
                <div className="col-start-2 col-span-1 row-start-3 row-span-1">
                    <Image className="max-w-3xl -translate-x-1/2 -translate-y-28"
                           src="/images/sources/yellow_brush.png"
                           alt="" width="1100" height="0"/>
                </div>
                <div className="col-start-3 col-span-1 row-start-3 row-span-1">
                    <Image className="max-w-5xl translate-x-24 -translate-y-24"
                           src="/images/sources/blue_brush_2.png"
                           alt="" width="1000" height="0"/>
                </div>
            </section>
        </main>
    );
}
