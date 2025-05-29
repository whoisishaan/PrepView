import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-12 pt-6 md:pb-20 lg:pb-32 lg:pt-24">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">Your Career Journey Starts Here</h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg">Discover off-campus opportunities and ace interviews with PrepView&apos;s AI coach and land your next role with confidence</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base">
                                        <Link href="https://prepvieww.vercel.app/sign-in">
                                            <span className="text-nowrap">Start Interview</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base">
                                        <Link href="https://thejobhunter.vercel.app/">
                                            <span className="text-nowrap">Apply For Jobs</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2">
                                <Image
                                    className="mx-auto h-auto w-full max-w-lg object-contain invert dark:mix-blend-lighten dark:invert-0"
                                    src="/robot.png"
                                    alt="Abstract Object"
                                    height={400}
                                    width={300}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Secure Your Dream Company With PrepView</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/NVIDIA_logo.svg"
                                            alt="Nvidia Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit"
                                            src="https://img.icons8.com/color/480/microsoft.png"
                                            alt="Microsoft Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit"
                                            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                                            alt="Amazon Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                    <img
                                            className="mx-auto h-5 w-fit"
                                            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                                            alt="Google Logo"
                                            height="20"
                                            width="auto"
                                        />
                                        
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit"
                                            src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
                                            alt="Meta Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>



                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit"
                                            src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Adobe_logo_and_wordmark_%282017%29.svg
"
                                            alt="Adobe Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-7 w-fit"
                                            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                                            alt="Netflix Logo"
                                            height="28"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 w-fit dark:invert"
                                            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Deloitte-logo-black.svg"
                                            alt="Deloitte Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
