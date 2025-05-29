import React from 'react'
import { Card } from '@/components/ui/card'
import { Linkedin, Github } from 'lucide-react'

export function TeamSection() {
    const team = [
        {
            name: 'Ishaan Sharma',
            role: 'Founder & CEO - PrepView',
            bio: 'Final Year B. Tech Student at VIT',
            image: '/ishaanpic.jpg',
            linkedin: 'https://www.linkedin.com/in/ishaan-sharma-a43547202/', // Replace with actual LinkedIn URL
            github: 'https://github.com/whoisishaan' // Replace with actual GitHub URL
        },
        {
            name: 'Rishabh Kannojia',
            role: 'Founder & CEO - Job Hunter',
            bio: 'Final Year B. Tech Student at VIT',
            image: '/rishabhimage.jpg',
            linkedin: 'https://www.linkedin.com/in/rishabh-kannojia/', // Replace with actual LinkedIn URL
            github: 'https://github.com/rishabhurfrk' // Replace with actual GitHub URL
        }
    ]

    return (
        <section id="team" className="py-10 md:py-16 bg-zinc-50 dark:bg-transparent">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold lg:text-5xl mb-4 text-white">
                        Meet Our Team
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        The passionate minds behind PrepView, dedicated to revolutionizing your job search journey.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {team.map((member, index) => (
                        <Card key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-lg shadow-zinc-950/5 dark:shadow-none border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
                            <div className="flex flex-col items-center pt-10 px-6 pb-8">
                                {/* Circular Profile Picture */}
                                <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-zinc-100 dark:border-zinc-800 group-hover:border-primary/20 transition-colors duration-300">
                                    <div 
                                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${member.image})` }}
                                    />
                                </div>
                                
                                {/* Member Info */}
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{member.name}</h3>
                                    <span className="inline-block px-4 py-1 mt-2 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full">
                                        {member.role}
                                    </span>
                                    <p className="mt-3 text-zinc-600 dark:text-zinc-400">{member.bio}</p>
                                    
                                    {/* Social Links */}
                                    <div className="flex justify-center gap-4 mt-4">
                                        <a 
                                            href={member.linkedin} 
                                            className="p-2 text-zinc-500 hover:text-[#0077b5] dark:text-zinc-400 dark:hover:text-[#0077b5] transition-colors"
                                            aria-label={`${member.name}'s LinkedIn`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a 
                                            href={member.github} 
                                            className="p-2 text-zinc-500 hover:text-[#333] dark:text-zinc-400 dark:hover:text-white transition-colors"
                                            aria-label={`${member.name}'s GitHub`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
