import React from 'react';
import { FaYoutube, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white mt-16 pt-12 pb-8">
            <div className="container mx-auto px-6">
                
                
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">KeenKeeper</h2>
                    <p className="text-white/70 max-w-md mx-auto text-sm">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    
                    
                    <div>
                        <p className="font-semibold mb-3">Social Links</p>
                        <div className="flex gap-4 justify-center">
                            <a href="#" className="bg-black p-2 rounded-full hover:bg-gray-800 transition">
                                <FaYoutube size={18} />
                            </a>
                            <a href="#" className="bg-black p-2 rounded-full hover:bg-gray-800 transition">
                                <FaFacebook size={18} />
                            </a>
                            <a href="#" className="bg-black p-2 rounded-full hover:bg-gray-800 transition">
                                <FaXTwitter size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                
                <div className="mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
                    <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms of Service</a>
                        <a href="#" className="hover:text-white transition">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;