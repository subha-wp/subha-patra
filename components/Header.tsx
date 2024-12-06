import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">FS Dev</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            <li>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                Resume
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

