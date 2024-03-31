import Image from 'next/image';

export default function ArtworkImage({ className, src }: { className: string; src: string }) {
    return (
        <div className={`relative ${className}`}>
            <Image className="object-contain" src={`/images/${src}`} alt="" fill />
        </div>
    );
}
