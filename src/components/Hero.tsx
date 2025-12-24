import React from 'react';
import { Mail, Github, Linkedin, User as UserIcon, BookOpen, FileText, Newspaper, Building2, IdCard, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
    data: Record<string, string>;
    publicationStats?: {
        journals: number;
        conferences: number;
        books: number;
    };
    socialLinks?: {
        mail?: string;
        github?: string;
        linkedin?: string;
    };
}

export const Hero: React.FC<HeroProps> = ({ data, publicationStats, socialLinks }) => {
    const name = data['Full Name'] || 'Faculty Member';
    const designation = data['Designation'] || 'Designation';
    const dept = data['Department'] || '';
    const institution = data['Institution Name'];
    const employeeId = data['Employee ID'];
    const officialEmail = data['Official Email'];
    const phone = data['Phone Number'];
    const ensureProtocol = (link: string) => {
        if (!link || link === '#') return '#';
        if (link.startsWith('http://') || link.startsWith('https://')) return link;
        return `https://${link}`;
    };


    // For hrefs
    const githubLink = ensureProtocol(socialLinks?.github || '#');
    const linkedinLink = ensureProtocol(socialLinks?.linkedin || '#');

    const getPhotoUrl = (url: string) => {
        if (!url) return '';

        // Handle various Google Drive URL formats
        if (url.includes('drive.google.com')) {
            let id = '';
            // Match /d/ID or /file/d/ID
            const dMatch = url.match(/\/d\/([a-zA-Z0-9_-]{25,})/);
            // Match id=ID
            const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]{25,})/);

            if (dMatch && dMatch[1]) id = dMatch[1];
            else if (idMatch && idMatch[1]) id = idMatch[1];

            if (id) {
                // This is the most reliable "hotlink" format for Google Drive photos
                return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
            }
        }
        return url;
    };

    const photo = getPhotoUrl(data['Profile Photo Link']);

    return (
        <section id="basicInfo" className="min-h-screen relative flex flex-col md:flex-row items-center overflow-hidden bg-[#fdfbf7]">
            {/* Theme Background Shape - The 'Curve' */}
            <div className="absolute top-0 left-0 w-full md:w-[45%] h-full bg-[#E6E2D6] rounded-br-[100px] md:rounded-br-[200px] z-0"></div>


            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Content Column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col space-y-8 md:pr-10"
                >
                    {/* Greeting */}
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg md:text-xl font-medium text-stone-600 tracking-wide"
                    >
                        Hello, I'm
                    </motion.h3>

                    {/* Name - Single Line */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight text-[#6f6954] whitespace-nowrap tracking-tight"
                    >
                        {name}
                    </motion.h1>

                    {/* Designation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-2"
                    >
                        <p className="text-xl md:text-2xl font-bold text-stone-700">
                            {designation}
                        </p>
                        <p className="text-lg text-stone-500 font-medium font-serif italic">
                            {dept}
                        </p>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.52 }}
                        className="space-y-3 text-stone-600 font-medium text-15 md:text-base mt-4"
                    >
                        {institution && (
                            <div className="flex items-center gap-3">
                                <Building2 size={18} className="text-[#a39a7e] shrink-0" />
                                <span>{institution}</span>
                            </div>
                        )}
                        {employeeId && (
                            <div className="flex items-center gap-3">
                                <IdCard size={18} className="text-[#a39a7e] shrink-0" />
                                <span>ID: {employeeId}</span>
                            </div>
                        )}
                        {officialEmail && (
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-[#a39a7e] shrink-0" />
                                <span>{officialEmail}</span>
                            </div>
                        )}
                        {phone && (
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-[#a39a7e] shrink-0" />
                                <span>{phone}</span>
                            </div>
                        )}
                    </motion.div>



                    {/* Publication Analysis - Beside Name */}
                    {publicationStats && (publicationStats.journals > 0 || publicationStats.conferences > 0 || publicationStats.books > 0) && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55 }}
                            className="flex flex-wrap gap-3"
                        >
                            {/* Uses global glass-card which is now white-ish */}
                            {publicationStats.journals > 0 && (
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 hover-lift bg-white/60"
                                >
                                    <motion.div
                                        animate={{
                                            y: [0, -5, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="w-12 h-12 blob-1 animate-morph bg-[#a39a7e] flex items-center justify-center text-white shadow-md"
                                    >
                                        <FileText className="w-6 h-6" />
                                    </motion.div>
                                    <div>
                                        <p className="text-2xl font-black text-stone-800">{publicationStats.journals}</p>
                                        <p className="text-xs font-semibold text-stone-500">Journals</p>
                                    </div>
                                </motion.div>
                            )}

                            {publicationStats.conferences > 0 && (
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 hover-lift bg-white/60"
                                >
                                    <motion.div
                                        animate={{
                                            y: [0, -5, 0],
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.5
                                        }}
                                        className="w-12 h-12 blob-2 animate-morph bg-[#8c8469] flex items-center justify-center text-white shadow-md"
                                    >
                                        <Newspaper className="w-6 h-6" />
                                    </motion.div>
                                    <div>
                                        <p className="text-2xl font-black text-stone-800">{publicationStats.conferences}</p>
                                        <p className="text-xs font-semibold text-stone-500">Conferences</p>
                                    </div>
                                </motion.div>
                            )}

                            {publicationStats.books > 0 && (
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 hover-lift bg-white/60"
                                >
                                    <motion.div
                                        animate={{
                                            y: [0, -5, 0],
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1
                                        }}
                                        className="w-12 h-12 blob-3 animate-morph bg-[#78716c] flex items-center justify-center text-white shadow-md"
                                    >
                                        <BookOpen className="w-6 h-6" />
                                    </motion.div>
                                    <div>
                                        <p className="text-2xl font-black text-stone-800">{publicationStats.books}</p>
                                        <p className="text-xs font-semibold text-stone-500">Books</p>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    )}

                    {/* Social Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex gap-4"
                    >
                        {[
                            { icon: <Mail size={20} />, href: '#contact', color: 'bg-[#a39a7e]' },
                            { icon: <Github size={20} />, href: githubLink, color: 'bg-stone-700' },
                            { icon: <Linkedin size={20} />, href: linkedinLink, color: 'bg-[#6f6954]' }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target={social.href.startsWith('http') ? "_blank" : undefined}
                                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                className="group relative w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:text-white transition-all duration-300 hover:border-transparent hover:-translate-y-1 overflow-hidden"
                            >
                                <div className={`absolute inset-0 ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                <span className="relative z-10">{social.icon}</span>
                            </a>
                        ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        href="#contact"
                        className="btn-premium px-8 py-4 rounded-full text-white font-bold text-lg w-fit shadow-md hover:shadow-lg bg-[#a39a7e]"
                    >
                        Let's Connect
                    </motion.a>
                </motion.div>

                {/* Right Photo Column */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex items-center justify-center md:self-center md:justify-center relative md:-mt-10 lg:-mt-12"
                >
                    <div className="relative">
                        {/* Decorative Circle Behind Photo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-[#d6d3d1] opacity-60"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-[#e7e5e4] opacity-80"></div>

                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                            {photo ? (
                                <img
                                    src={photo}
                                    alt={name}
                                    className="w-full h-full object-cover object-center"
                                    referrerPolicy="no-referrer"
                                />
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center bg-stone-200 text-stone-500">
                                    <UserIcon size={96} className="opacity-50" />
                                    <span className="mt-4 opacity-50 font-semibold">No Photo</span>
                                </div>
                            )}
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};
