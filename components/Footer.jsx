
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Component() {
  return (
    <footer className="bg-teal-500 py-8 sm:py-12 ">
    <div className="ml-12 lg:ml-64 text-white">
      <div className="container max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* <div className="flex flex-col gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <span className="text-lg font-bold">Portfolio</span>
          </Link>
          <p className="text-muted-foreground">A simple and clean portfolio website showcasing my work and skills.</p>
        </div> */}
        {/* <div className="grid gap-2">
          <h4 className="text-sm font-medium text-foreground">Navigation</h4>
          <nav className="grid gap-1">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Projects
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div> */}
        <div className="grid gap-2">
          <h4 className="text-sm font-medium text-foreground">Social</h4>
          <nav className="flex gap-2">
            <Link href="https://github.com/Narayan367" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <FaGithub className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com/NarayanDhungel5" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <FaTwitter className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/narayan-dhungel-169755278/" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <FaLinkedin className="h-5 w-5" />
            </Link>
          </nav>
        </div>
        <div className="grid gap-2">
          <h4 className="text-sm font-medium text-foreground">Contact</h4>
          <p className="text-sm text-muted-foreground">Email: narayandhungel5@gmail.com</p>
          <p className="text-sm text-muted-foreground">Phone: +977-9824065023</p>
        </div>
      </div>
      <div className="container max-w-5xl mt-8 flex items-center justify-between text-xs text-muted-foreground">
        <p>&copy; Narayan Dhungel. All rights reserved.</p>
      </div>
    </div>
    </footer>
  )
}
