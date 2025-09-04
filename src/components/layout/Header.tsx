import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-soft">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DropMart
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-smooth">
              Categories
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-smooth">
              Suppliers
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-smooth">
              Wholesale
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-smooth">
              RFQ
            </a>
          </nav>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-lg mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search products, suppliers, categories..."
              className="pl-10 bg-muted/50 border-0 focus:bg-background shadow-soft"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button variant="outline" size="sm">
              Sign Up
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center">
                2
              </Badge>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur animate-fade-in">
          <div className="container py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-muted/50 border-0"
              />
            </div>
            
            {/* Mobile Navigation */}
            <nav className="space-y-3">
              <a href="#" className="block py-2 text-sm font-medium hover:text-primary transition-smooth">
                Categories
              </a>
              <a href="#" className="block py-2 text-sm font-medium hover:text-primary transition-smooth">
                Suppliers
              </a>
              <a href="#" className="block py-2 text-sm font-medium hover:text-primary transition-smooth">
                Wholesale
              </a>
              <a href="#" className="block py-2 text-sm font-medium hover:text-primary transition-smooth">
                RFQ
              </a>
            </nav>
            
            {/* Mobile Actions */}
            <div className="flex gap-3 pt-3 border-t">
              <Button variant="outline" size="sm" className="flex-1">
                Login
              </Button>
              <Button variant="default" size="sm" className="flex-1">
                Sign Up
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center">
                  2
                </Badge>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};