"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import "./style.css";

const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "Forgot Password", href: "/forgot-password"},
];

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;

}) {
    const pathname = usePathname();

    return (
        <>
            <nav>
                <ul>
                    {navLinks.map((link, index) => {
                       const isActive=pathname.startsWith(link.href) ;
                        
                        return(
                        <li key={index}>
                            <Link href={link.href}
                            className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
                            >{link.name}</Link>
                        </li>
                        );
                        })}
                </ul>
            </nav>
            {children}
        </>
    );
}   