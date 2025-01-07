
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-deep-black py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-body text-beige">&copy; 2023 Luxe Parfum. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-amber hover:text-shimmering-gold mx-2">Privacy Policy</a>
          <a href="#" className="text-amber hover:text-shimmering-gold mx-2">Terms of Service</a>
          <a href="#" className="text-amber hover:text-shimmering-gold mx-2">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}

