import Link from "next/link"

export default function Footer() {
    return (
        <footer className="text-center text-aqua">
            <div>
                <Link href="https://github.com/ianholsteen" rel="noopener noreferrer" target="_blank" className="pb-16 hover:text-salmon">Built and Designed by Ian Holsteen &copy;2025</Link>
            </div>
        </footer>
    )
}
