import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Palette, 
  Layers, 
  User, 
  Briefcase, 
  Code,
  ChevronRight,
  Menu,
  X,
  Instagram
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/10 py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-display font-bold tracking-tighter"
        >
          GB<span className="text-accent">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="nav-link"
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 bg-accent hover:bg-accent-dark text-white rounded-full text-sm font-semibold transition-all"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-x-0 top-[72px] bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden z-40"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold text-white/70 hover:text-accent transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-accent text-black rounded-2xl text-center font-bold text-lg"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/10 rounded-full blur-[100px] md:blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/5 rounded-full blur-[100px] md:blur-[150px] animate-pulse delay-700" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 md:px-6 py-2 mb-6 md:mb-8 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase bg-white/5 border border-white/10 rounded-full text-accent backdrop-blur-md">
            Creative Graphic Designer
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-bold tracking-tighter mb-6 md:mb-8 leading-[1] md:leading-[0.9]">
            Gnancy <br className="md:hidden" /> <span className="gradient-text">Beulah</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-2xl text-white/50 font-light max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed px-4"
          >
            Animation student at Loyola College Chennai. <br className="hidden sm:block" />
            Transforming ideas into <span className="text-white">impactful visual experiences</span> through precise design and motion.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full sm:w-auto"
            >
              Explore Work <ChevronRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary w-full sm:w-auto"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20"
      >
        <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center p-1.5">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1.5 bg-accent rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden glass-card p-2 md:p-3">
              <img 
                src="https://image2url.com/r2/default/images/1772384112237-0e7c5d41-ef7f-4425-acc7-53a94153ebc8.blob" 
                alt="Gnancy Beulah" 
                className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 glass-card p-4 md:p-8 border-accent/20">
              <p className="text-3xl md:text-5xl font-display font-bold text-accent mb-1">1st Year</p>
              <p className="text-[10px] md:text-sm tracking-widest uppercase text-white/40 font-bold">Animation Student</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">My Journey</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 md:mb-8 leading-tight">Designing with <br /> <span className="text-white/40 italic">Purpose & Passion</span></h2>
            <div className="space-y-4 md:space-y-6 text-white/60 text-base md:text-lg leading-relaxed">
              <p>
                As a dedicated Animation student at <span className="text-white">Loyola College, Chennai</span>, I bridge the gap between static design and dynamic storytelling. My expertise lies in creating professional brand identities and high-impact print layouts.
              </p>
              <p>
                I specialize in <span className="text-white">CorelDRAW</span> and <span className="text-white">Adobe Photoshop</span>, focusing on delivering clean, modern, and effective design solutions for print and digital media.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              <div className="p-6 glass-card border-white/5">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-4">
                  <Briefcase size={24} />
                </div>
                <h4 className="font-bold text-white mb-1">Education</h4>
                <p className="text-white/40 text-sm">B.Sc. Animation (2nd Sem)</p>
                <p className="text-white/40 text-sm">Loyola College</p>
              </div>
              <div className="p-6 glass-card border-white/5">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-4">
                  <MapPin size={24} />
                </div>
                <h4 className="font-bold text-white mb-1">Location</h4>
                <p className="text-white/40 text-sm">Ayanavaram, Chennai</p>
                <p className="text-white/40 text-sm">Available for Part-time</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: 'CorelDRAW', level: 95, icon: <Palette size={20} /> },
    { name: 'Adobe Photoshop', level: 90, icon: <Layers size={20} /> },
    { name: 'Print Layout', level: 85, icon: <Briefcase size={20} /> },
    { name: 'Vector Art', level: 80, icon: <Palette size={20} /> },
    { name: 'Typography', level: 75, icon: <Code size={20} /> },
    { name: 'Motion Design', level: 70, icon: <Layers size={20} /> },
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:20 gap-8">
          <div className="max-w-xl">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Technical <span className="text-white/40">Proficiency</span></h2>
            <p className="text-white/50 text-base md:text-lg">Mastering the tools that bring creative visions to life with precision and flair.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 md:p-10 group"
            >
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-all duration-500 text-accent">
                  {skill.icon}
                </div>
                <span className="text-2xl md:text-3xl font-display font-bold text-white/20 group-hover:text-accent transition-colors">{skill.level}%</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{skill.name}</h3>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-accent to-accent-dark"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const projects = [
    { 
      title: 'Corporate ID Card Design', 
      category: 'ID Card Design', 
      images: [
        'https://image2url.com/r2/default/images/1772383567761-7d8b01e4-d319-46ef-aac2-34215b2d37a7.jpg',
        'https://image2url.com/r2/default/images/1772383642037-c9620713-9abe-4681-8c42-93d14ac15e4d.jpg'
      ]
    },
    { title: 'Wedding Poster Design', category: 'Poster Design', images: ['https://image2url.com/r2/default/images/1772381882609-6760e4a5-fc86-4946-84c2-b37bb341affe.jpeg'] },
    { title: 'Royal Star Enterprises ID', category: 'ID Card Design', images: ['https://image2url.com/r2/default/images/1772381910020-c177b06d-5848-477d-87ed-e53014a134c9.jpeg'] },
    { title: 'University ID Card', category: 'ID Card Design', images: ['https://image2url.com/r2/default/images/1772381932258-78c341bc-e94a-4a78-b554-f4ddd5d948fe.jpeg'] },
    { title: 'Friendship Quote Poster', category: 'Poster Design', images: ['https://image2url.com/r2/default/images/1772381954204-fcc6996b-bb41-440a-bfe3-a223341ba7e0.jpeg'] },
    { title: 'ABC Technologies ID Card', category: 'ID Card Design', images: ['https://image2url.com/r2/default/images/1772381971414-7bee73db-8e32-46da-bb4e-357306ff64ad.jpeg'] },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:20 gap-8">
          <div className="max-w-xl">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Selected <span className="text-white/40">Works</span></h2>
            <p className="text-white/50 text-base md:text-lg">A showcase of my recent design projects, from corporate branding to creative posters.</p>
          </div>
          <div className="flex gap-3 md:gap-4 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-6 md:px-8 py-3 rounded-full border border-white/10 text-xs md:text-sm font-bold hover:bg-white/5 transition-all">All Projects</button>
            <button className="flex-1 sm:flex-none px-6 md:px-8 py-3 rounded-full border border-accent text-xs md:text-sm font-bold bg-accent/10 text-accent">Design</button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-white/5 border border-white/10"
            >
              <div className="h-[350px] md:h-[500px] overflow-hidden">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-10">
                <span className="text-accent text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2 md:mb-3">{project.category}</span>
                <h3 className="text-xl md:text-3xl font-display font-bold mb-4 md:mb-6 leading-tight">{project.title}</h3>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full sm:w-fit px-6 md:px-8 py-2.5 md:py-3 bg-white text-black rounded-full text-xs md:text-sm font-bold flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition-all duration-300"
                >
                  View Project <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 flex items-start justify-center p-4 md:p-10 overflow-y-auto backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <button 
              className="fixed top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors z-[110] p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md border border-white/10"
              onClick={() => setSelectedProject(null)}
            >
              <X size={28} className="md:w-8 md:h-8" />
            </button>
            
            <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-6xl py-12 md:py-20" onClick={(e) => e.stopPropagation()}>
              <div className="text-center max-w-2xl px-4">
                <span className="text-accent font-bold tracking-widest uppercase text-[10px] md:text-xs mb-3 md:mb-4 block">{selectedProject.category}</span>
                <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6 leading-tight">{selectedProject.title}</h3>
                <div className="w-16 md:w-20 h-1 bg-accent mx-auto rounded-full" />
              </div>
              
              <div className={`grid gap-6 md:gap-12 w-full ${selectedProject.images.length > 1 ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
                {selectedProject.images.map((img: string, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.2 }}
                    className="relative group w-full"
                  >
                    <img 
                      src={img} 
                      alt={`${selectedProject.title} view ${idx + 1}`} 
                      className="w-full h-auto max-h-[70vh] md:max-h-[85vh] object-contain rounded-2xl md:rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] mx-auto border border-white/5"
                      referrerPolicy="no-referrer"
                    />
                    {selectedProject.images.length > 1 && (
                      <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/60 backdrop-blur-xl text-white text-[8px] md:text-[10px] font-bold tracking-widest uppercase px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10">
                        {idx === 0 ? 'Front View' : 'Back View'}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card p-8 md:p-24 overflow-hidden relative border-white/5">
          <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/10 rounded-full blur-[80px] md:blur-[120px] -mr-32 -mt-32 md:-mr-64 md:-mt-64" />
          
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 relative z-10">
            <div>
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Contact</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 md:mb-8 leading-tight">Let's Create <br /> <span className="gradient-text">Something Great</span></h2>
              <p className="text-white/50 text-base md:text-lg mb-8 md:mb-12 max-w-md">
                I'm currently seeking part-time roles or freelance projects. If you're looking for a fresh perspective and dedicated design work, let's connect.
              </p>
              
              <div className="space-y-6 md:space-y-8">
                <a href="mailto:gnancybeulah@gmail.com" className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-500 text-accent">
                    <Mail size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-1">Email Me</p>
                    <p className="text-lg md:text-xl font-bold break-all">gnancybeulah@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+919043376136" className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-500 text-accent">
                    <Phone size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-1">Call Me</p>
                    <p className="text-lg md:text-xl font-bold">+91 90433 76136</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-card p-6 md:p-10 border-white/5 bg-white/[0.02]">
              <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-white/40 ml-1">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 focus:outline-none focus:border-accent transition-all duration-300 placeholder:text-white/10 text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-white/40 ml-1">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 focus:outline-none focus:border-accent transition-all duration-300 placeholder:text-white/10 text-sm" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-white/40 ml-1">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 focus:outline-none focus:border-accent transition-all duration-300 resize-none placeholder:text-white/10 text-sm" placeholder="Tell me about your project..." />
                </div>
                <button className="w-full py-4 md:py-5 bg-accent hover:bg-white text-black rounded-xl md:rounded-2xl font-bold text-base md:text-lg transition-all duration-300 shadow-xl shadow-accent/10">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <a href="#home" className="text-3xl font-display font-bold tracking-tighter">
              GB<span className="text-accent">.</span>
            </a>
            <p className="text-white/30 text-sm mt-4 max-w-xs leading-relaxed">
              Graphic Designer & Animation Student dedicated to crafting visual excellence.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10">
            {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: <Instagram size={20} />, href: "#" },
              { icon: <Linkedin size={20} />, href: "#" },
              { icon: <Github size={20} />, href: "#" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white/40 hover:text-accent hover:bg-white/10 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-medium tracking-widest uppercase">
            © 2024 Gnancy Beulah. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-medium tracking-widest uppercase">
            Chennai, India
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
