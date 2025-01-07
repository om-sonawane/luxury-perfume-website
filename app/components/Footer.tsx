
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-deep-black py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-body text-beige">&copy; 2025 OMKAR. All rights reserved.</p>
        <div className="mt-4">
          <a href="https://www.linkedin.com/in/om-sonawane-23bab11b8/" className="text-amber hover:text-shimmering-gold mx-2">Linkdin</a>
          <a href="https://github.com/om-sonawane" className="text-amber hover:text-shimmering-gold mx-2">Github</a>
          <a href="mailto:omsonawane03@gmail.com" className="text-amber hover:text-shimmering-gold mx-2">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}

