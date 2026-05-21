import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold mb-4">About InsectHub</h3>
            <p className="text-sm opacity-90">
              Malawi's leading marketplace connecting buyers, sellers, and waste suppliers in the insect and circular economy sector.
            </p>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="font-bold mb-4">Marketplace</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/products" className="opacity-90 hover:opacity-100 transition">Browse Products</a></li>
              <li><a href="/suppliers" className="opacity-90 hover:opacity-100 transition">Find Suppliers</a></li>
              <li><a href="/waste" className="opacity-90 hover:opacity-100 transition">Waste Trading</a></li>
              <li><a href="/quote" className="opacity-90 hover:opacity-100 transition">Request Quote</a></li>
            </ul>
          </div>

          {/* For Business */}
          <div>
            <h3 className="font-bold mb-4">For Business</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/seller-register" className="opacity-90 hover:opacity-100 transition">Become a Seller</a></li>
              <li><a href="/buyer-register" className="opacity-90 hover:opacity-100 transition">Become a Buyer</a></li>
              <li><a href="/pricing" className="opacity-90 hover:opacity-100 transition">Pricing</a></li>
              <li><a href="/support" className="opacity-90 hover:opacity-100 transition">Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/blog" className="opacity-90 hover:opacity-100 transition">Blog</a></li>
              <li><a href="/guides" className="opacity-90 hover:opacity-100 transition">Guides</a></li>
              <li><a href="/faq" className="opacity-90 hover:opacity-100 transition">FAQ</a></li>
              <li><a href="/contact" className="opacity-90 hover:opacity-100 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@insecthub.mw" className="opacity-90 hover:opacity-100 transition">
                  info@insecthub.mw
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+265123456789" className="opacity-90 hover:opacity-100 transition">
                  +265 1 234 567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="opacity-90">
                  Lilongwe, Malawi
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="/terms" className="opacity-90 hover:opacity-100 transition">Terms of Service</a>
              <a href="/privacy" className="opacity-90 hover:opacity-100 transition">Privacy Policy</a>
              <a href="/compliance" className="opacity-90 hover:opacity-100 transition">Compliance</a>
            </div>

            {/* Social Links */}
            <div className="flex justify-end gap-4">
              <a href="#" className="opacity-90 hover:opacity-100 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 InsectHub Marketplace. All rights reserved. Malawi's premier insect and waste marketplace.</p>
        </div>
      </div>
    </footer>
  );
};
