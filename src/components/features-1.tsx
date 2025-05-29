import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Briefcase, Settings2, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section id="features" className="bg-zinc-50 py-10 md:py-20 dark:bg-transparent scroll-mt-16">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Why Choose PrepView?</h2>
                    <p className="mt-4 text-lg text-muted-foreground">PrepView is your all-in-one job search solution.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-2 @min-6xl:grid-cols-4 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">AI-Powered Mock Interviews</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Practice with our intelligent AI that adapts to your responses and provides realistic interview scenarios for top tech companies.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Real-time Feedback</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Get instant, detailed feedback on your answers, body language, and communication skills to improve with every practice session.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Company-Specific Prep</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Access tailored interview questions and preparation materials specific to your target companies and roles.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Briefcase
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">From Application to Offer</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">From discovering off-campus opportunities to acing interviews with our AI-powered practice platform, we provide everything you need to get hired faster with our complete job search toolkit.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div
            aria-hidden
            className="bg-radial to-background absolute inset-0 from-transparent to-75%"
        />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
