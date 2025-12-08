import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaArrowLeft, FaPlay } from 'react-icons/fa';

const Gallery = ({ data }) => {
    const [activeAlbumIndex, setActiveAlbumIndex] = useState(null);
    const [lightboxIndex, setLightboxIndex] = useState(null);

    // Helper to check if file is video
    const isVideo = (src) => src?.toLowerCase().endsWith('.mp4');

    // Open Album to see grid of images
    const openAlbum = (index) => {
        setActiveAlbumIndex(index);
    };

    // Go back to main album list
    const backToAlbums = () => {
        setActiveAlbumIndex(null);
    };

    // Open Lightbox
    const openLightbox = (index) => {
        setLightboxIndex(index);
    };

    // Close Lightbox
    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    // Navigation
    const nextImage = () => {
        if (activeAlbumIndex === null) return;
        const images = data[activeAlbumIndex].images;
        setLightboxIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        if (activeAlbumIndex === null) return;
        const images = data[activeAlbumIndex].images;
        setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const renderMediaItem = (src, alt, isPreview = false) => {
        if (isVideo(src)) {
            return (
                <div className="relative w-full h-full">
                    <video
                        src={src}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        autoPlay={isPreview} // Autoplay in previews/grid
                    />
                    {/* Play Icon Overlay for Grid/Preview to indicate video */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none">
                        <FaPlay className="text-white/70 text-2xl drop-shadow-md" />
                    </div>
                </div>
            );
        }
        return (
            <img
                src={src}
                alt={alt}
                className={`w-full h-full object-cover ${isPreview ? 'group-hover:scale-110 transition-transform duration-700' : 'group-hover:scale-105 transition-transform duration-500'}`}
            />
        );
    };

    return (
        <section id="gallery" className="py-20 relative overflow-hidden min-h-screen">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header (Only show title on main view, or modify for sub-view) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Photo <span className="text-primary">Gallery</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                    {activeAlbumIndex === null && (
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Albums with highlights—click any album to view the full set
                        </p>
                    )}
                </motion.div>

                {/* VIEW 1: ALBUM LIST */}
                {activeAlbumIndex === null ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                    >
                        {data.map((album, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => openAlbum(index)}
                                className="glass-panel group rounded-2xl overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300"
                            >
                                {/* Preview Grid (Mosaic) */}
                                <div className="grid grid-cols-2 grid-rows-2 h-64 gap-1 bg-gray-900 border-b border-white/5">
                                    <div className="col-span-1 row-span-2 overflow-hidden relative">
                                        {renderMediaItem(album.images[0], album.name, true)}
                                    </div>
                                    <div className="overflow-hidden relative">
                                        {album.images[1] ? (
                                            renderMediaItem(album.images[1], album.name, true)
                                        ) : (
                                            <div className="w-full h-full bg-white/5"></div>
                                        )}
                                    </div>
                                    <div className="overflow-hidden relative">
                                        {album.images[2] ? (
                                            renderMediaItem(album.images[2], album.name, true)
                                        ) : (
                                            <div className="w-full h-full bg-white/5 relative flex items-center justify-center">
                                                <span className="text-xs text-white/50">+{album.images.length - 1}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                        {album.name}
                                    </h3>
                                    <div className="flex justify-between items-center text-sm text-gray-400">
                                        <span>{album.images.length} Items</span>
                                        <span className="group-hover:translate-x-1 transition-transform">View Album &rarr;</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    /* VIEW 2: IMAGE GRID (ALBUM DETAILS) */
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-7xl mx-auto"
                    >
                        {/* Navigation Header */}
                        <div className="flex items-center gap-4 mb-8">
                            <button
                                onClick={backToAlbums}
                                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white"
                            >
                                <FaArrowLeft /> Back
                            </button>
                            <h3 className="text-2xl font-semibold text-white">
                                {data[activeAlbumIndex].name}
                            </h3>
                        </div>

                        {/* Image Grid */}
                        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                            {data[activeAlbumIndex].images.map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => openLightbox(index)}
                                    className="break-inside-avoid rounded-xl overflow-hidden cursor-zoom-in border border-white/10 hover:border-primary/50 transition-all shadow-lg group relative"
                                >
                                    {renderMediaItem(img, `Gallery item ${index + 1}`)}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>

            {/* LIGHTBOX OVERLAY */}
            <AnimatePresence>
                {lightboxIndex !== null && activeAlbumIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        {/* Top Controls */}
                        <div className="absolute top-4 right-4 z-50">
                            <button
                                onClick={closeLightbox}
                                className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                            >
                                <FaTimes size={24} />
                            </button>
                        </div>

                        {/* Navigation - Left */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prevImage();
                            }}
                            className="absolute left-4 md:left-8 z-50 p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all hover:scale-110"
                        >
                            <FaChevronLeft size={30} />
                        </button>

                        {/* Navigation - Right */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                            }}
                            className="absolute right-4 md:right-8 z-50 p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all hover:scale-110"
                        >
                            <FaChevronRight size={30} />
                        </button>

                        {/* Main Image/Video */}
                        <motion.div
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative max-w-7xl max-h-[85vh] w-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()} // Prevent close on content click
                        >
                            {isVideo(data[activeAlbumIndex].images[lightboxIndex]) ? (
                                <video
                                    src={data[activeAlbumIndex].images[lightboxIndex]}
                                    controls
                                    autoPlay
                                    className="max-w-full max-h-[85vh] rounded-md shadow-2xl"
                                />
                            ) : (
                                <img
                                    src={data[activeAlbumIndex].images[lightboxIndex]}
                                    alt="Full screen"
                                    className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
                                />
                            )}
                        </motion.div>

                        {/* Footer Info */}
                        <div className="absolute bottom-6 left-0 right-0 text-center text-white/80 pointer-events-none">
                            <p className="text-lg font-medium">{data[activeAlbumIndex].name}</p>
                            <p className="text-sm opacity-60">
                                Item {lightboxIndex + 1} of {data[activeAlbumIndex].images.length}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;