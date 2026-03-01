@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Space Grotesk", sans-serif;
  --color-accent: #a78bfa; /* Softer Violet */
  --color-accent-dark: #7c3aed;
}

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-[#050505] text-white font-sans antialiased selection:bg-accent selection:text-black;
  }
}

.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-br from-white via-accent to-accent-dark;
}

.glass-card {
  @apply bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-[2rem] transition-all duration-300;
}

.glass-card:hover {
  @apply bg-white/[0.05] border-white/[0.15];
}

.nav-link {
  @apply text-sm font-medium text-white/50 hover:text-white transition-all duration-300 relative py-2;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300;
}

.nav-link:hover::after {
  @apply w-full;
}

.btn-primary {
  @apply px-8 py-4 bg-accent text-black rounded-full font-bold text-lg shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:bg-white transition-all duration-300 flex items-center gap-2;
}

.btn-secondary {
  @apply px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all duration-300;
}
