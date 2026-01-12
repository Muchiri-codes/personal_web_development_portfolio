import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react' 

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 p-4 h-20 rounded-4xl">
        
        {/* Logo Section - Far Left */}
        <div className="flex items-center">
          <Link href="#home" className="transition-transform hover:scale-105 active:scale-95">
            <Image
              className="rounded-full border border-emerald-500/20"
              src="/logo.png"
              alt="logo"
              width={60}
              height={60}
            />
          </Link>
          <span className="ml-4 font-black text-white tracking-tighter hidden sm:block">
            DEV<span className="text-emerald-500">.</span>DESIGN
          </span>
        </div>

        {/* Navigation Section - Far Right */}
        <nav className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
            <Link href="#home" className="text-gray-400 hover:text-emerald-500 transition-colors">Home</Link>
            <Link href="#about" className="text-gray-400 hover:text-emerald-500 transition-colors">About</Link>
            <Link href="#services" className="text-gray-400 hover:text-emerald-500 transition-colors">Services</Link>
            <Link href="#contact" className="text-gray-400 hover:text-emerald-500 transition-colors">Contact</Link>
          </div>

          {/* Search Bar Integration */}
          <div className="relative group hidden lg:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-emerald-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search..."
              className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all w-40 focus:w-60" 
            />
          </div>

          {/* Mobile Menu Icon could be added here */}
        </nav>
      </div>
    </header>
  )
}