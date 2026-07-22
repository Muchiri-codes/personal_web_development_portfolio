"use client"
import { useState, useEffect, use } from 'react';
import { SERVICES_LIST } from '@/app/data/portfolio';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const service = SERVICES_LIST.find((s: any) => s.slug === slug);
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  if (!service) {
    notFound();
  }

  const galleryItems = service.gallery || [];
  const isVideo = (path: string) => /\.(mp4|webm|ogg)$/i.test(path);

  useEffect(() => {
    if (photoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setPhotoIndex((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setPhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photoIndex, galleryItems]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/#services" 
          className="group inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-12 transition-colors"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Overview
        </Link>

        {/* Hero Meta Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <span className="inline-block px-3 py-1 mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-widest">
            {service.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">{service.title}</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-4xl leading-relaxed font-light">
            {service.desc}
          </p>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mt-12 pt-8 border-t border-white/5">
            <div className="border-l-2 border-emerald-500 pl-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Focus Area</h4>
              <p className="text-white text-lg font-medium mt-1 capitalize">{service.focus_area}</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Key Deliverable</h4>
              <p className="text-white text-lg font-medium mt-1 capitalize">{service.deliverable}</p>
            </div>
          </div>
        </div>

        {/* GALLERY GRID */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Project Showcases</h2>
            <p className="text-gray-500 text-sm mt-1">Click any frame or interactive clip to inspect full screen.</p>
          </div>

          {galleryItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {galleryItems.map((itemPath: string, index: number) => (
                <div 
                  key={index} 
                  onClick={() => setPhotoIndex(index)}
                  className="group relative aspect-4/3 rounded-3xl overflow-hidden border border-white/5 bg-[#111] shadow-2xl cursor-pointer"
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent z-10 transition-colors duration-500" />
                  
                  {/* Dynamic Media Selection Logic */}
                  {isVideo(itemPath) ? (
                    <video 
                      src={itemPath}
                      autoPlay muted loop playsInline
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <img 
                      src={itemPath} 
                      alt={`${service.title} item ${index + 1}`}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  )}
                  
                  <div className="absolute bottom-6 left-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs tracking-widest uppercase font-bold text-emerald-400 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                      {isVideo(itemPath) ? "Play Presentation ▷" : "Expand View ⤢"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl">
              <p className="text-gray-500">No showcase items added to this service directory yet.</p>
            </div>
          )}
        </section>
      </div>

      {photoIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
          onClick={() => setPhotoIndex(null)}
        >
          <button 
            onClick={() => setPhotoIndex(null)}
            className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-emerald-500 hover:text-black transition-all text-2xl flex items-center justify-center font-bold shadow-lg"
          >
            &times;
          </button>

          <div className="hidden md:flex items-center justify-between w-full h-full px-12" onClick={(e) => e.stopPropagation()}>
            {/* Left Nav Arrow */}
            <button 
              onClick={() => setPhotoIndex(photoIndex > 0 ? photoIndex - 1 : galleryItems.length - 1)}
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:border-emerald-500 hover:text-emerald-500 transition-all flex items-center justify-center text-xl font-bold backdrop-blur-md"
            >
              &#8592;
            </button>

            <div className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center justify-center">
              {isVideo(galleryItems[photoIndex]) ? (
                <video 
                  src={galleryItems[photoIndex]} 
                  autoPlay 
                  controls 
                  playsInline
                  className="max-w-full max-h-[75vh] rounded-xl shadow-2xl animate-in zoom-in-95 duration-200"
                />
              ) : (
                <img 
                  src={galleryItems[photoIndex]} 
                  loading='lazy'
                  alt="Expanded showcase frame desktop" 
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-200"
                />
              )}
              <p className="text-gray-400 text-xs tracking-widest mt-4 uppercase font-bold bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
                Asset {photoIndex + 1} of {galleryItems.length}
              </p>
            </div>

            <button 
              onClick={() => setPhotoIndex(photoIndex < galleryItems.length - 1 ? photoIndex + 1 : 0)}
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:border-emerald-500 hover:text-emerald-500 transition-all flex items-center justify-center text-xl font-bold backdrop-blur-md"
            >
              &#8594;
            </button>
          </div>

          <div 
            className="flex md:hidden flex-col w-full h-full overflow-y-scroll snap-y snap-mandatory pt-20 pb-12 px-4 gap-12"
            onClick={(e) => e.stopPropagation()}
          >
            {galleryItems.map((itemSrc: string, i: number) => (
              <div 
                key={i} 
                ref={(el) => {
                  if (i === photoIndex && el) {
                    el.scrollIntoView({ behavior: 'auto', block: 'center' });
                  }
                }}
                className="w-full h-auto min-h-[60vh] flex flex-col items-center justify-center snap-center"
              >
                {isVideo(itemSrc) ? (
                  <video 
                    src={itemSrc} 
                    autoPlay 
                    playsInline
                    muted 
                    className="w-full max-h-[65vh] rounded-2xl shadow-xl"
                  />
                ) : (
                  <img 
                    src={itemSrc} 
                    loading='lazy'
                    alt="Expanded showcase frame mobile" 
                    className="w-full max-h-[65vh] object-contain rounded-2xl shadow-xl"
                  />
                )}
                <span className="text-gray-500 text-xs tracking-widest font-bold uppercase mt-3">
                  Item {i + 1} / {galleryItems.length}
                </span>
              </div>
            ))}
          </div>

        </div>
      )}
    </main>
  );
}