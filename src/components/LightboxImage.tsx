"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";

export function LightboxImage({
    src,
    alt,
    caption,
    className,
    sizes,
    priority,
}: {
    src: string;
    alt: string;
    caption?: string;
    className?: string;
    sizes: string;
    priority?: boolean;
}) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label={alt}
                className="group absolute inset-0 w-full h-full cursor-zoom-in"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes={sizes}
                    priority={priority}
                    className={className}
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
            </button>
            {open && (
                <div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/85 p-4"
                    onClick={() => setOpen(false)}
                >
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        aria-label="Fechar"
                        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors cursor-pointer"
                    >
                        <X className="w-7 h-7" />
                    </button>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={src}
                        alt={alt}
                        className="max-w-[95vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                    {caption && (
                        <p className="max-w-2xl text-center text-sm text-white/70">{caption}</p>
                    )}
                </div>
            )}
        </>
    );
}
