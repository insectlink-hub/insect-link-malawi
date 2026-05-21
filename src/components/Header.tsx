import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Menu, X, Search, LogIn, UserPlus } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">
              IH
            </div>
            <span className="font-bold text-lg hidden sm:inline">InsectHub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <a href="/products" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Products
            </a>
            <a href="/suppliers" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Suppliers
            </a>
            <a href="/waste" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Waste
            </a>
            <a href="/quote" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Request Quote
            </a>
            <a href="/about" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition">
              About
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="hidden lg:flex items-center">
              <div className="relative">
                <Input
                  placeholder="Search..."
                  className="w-40 pl-3 pr-8 text-sm"
                />
                <Search className="h-4 w-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>

            {/* Auth Buttons */}
            <Button variant="ghost" size="sm" className="gap-2 hidden sm:flex">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
            <Button size="sm" className="gap-2 hidden sm:flex">
              <UserPlus className="h-4 w-4" />
              Register
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-2">
            <a href="/products" className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded">
              Products
            </a>
            <a href="/suppliers" className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded">
              Suppliers
            </a>
            <a href="/waste" className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded">
              Waste
            </a>
            <a href="/quote" className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded">
              Request Quote
            </a>
            <a href="/about" className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded">
              About
            </a>
            <div className="border-t border-border pt-4 mt-4 space-y-2">
              <Button variant="outline" className="w-full gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
              <Button className="w-full gap-2">
                <UserPlus className="h-4 w-4" />
                Register
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
