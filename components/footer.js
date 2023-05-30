import {useState} from 'react';
import Link from "next/link";
import RomanNumerals from '../lib/romanNumerals';
import { siGithub, siDiscord, siTwitter, siInstagram } from 'simple-icons/icons';
import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const initialDiscordText = 'Roberto#1762';
    const [discordText, setDiscordText] = useState(initialDiscordText);

    function handleDiscordClick() {
        navigator.clipboard.writeText("Roberto#1762").then(r => {
            setDiscordText('Copied to clipboard!');

            setTimeout(() => {
                setDiscordText(initialDiscordText);
            }, 1000);
        });
    }

    return (
        <>
            <footer className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-x-4 md:gap-2.5">
                    <a href="mailto:pilar@student.uns.ac.id" className="text-gray-400">
                        <Mail className="w-5 h-5">
                            <title>Email</title>
                        </Mail>
                    </a>
                    <a href="https://github.com/pilarxyz" className="text-gray-400" target="_blank" rel="noopener noreferrer">
                        <svg
                            fill="currentColor"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>{siGithub.title}</title>
                            <path d={siGithub.path} />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/pilarrs/" className="text-gray-400" target="_blank" rel="noopener noreferrer">
                        <Linkedin fill="currentColor" strokeWidth="0" className="w-5 h-5">
                            <title>Linkedin</title>
                        </Linkedin>
                    </a>
                </span>
            </footer>
        </>
    )
}
