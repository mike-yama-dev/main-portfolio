import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const date = new Date();
    const isMorning = date.getHours() < 12;
    const isAfternoon = date.getHours() >= 12 && date.getHours() < 18;
    const isEvening = date.getHours() >= 18;

    const greeting = isMorning ? "Good morning!" : isAfternoon ? "Good afternoon!" : "Good evening!";
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-background p-6 text-foreground lg:justify-center lg:p-8">
                <header className="mb-6 w-full max-w-[335px] text-sm lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        
                        <Link
                            href={route('about')}
                            /* Use border-border and text-foreground */
                            className="inline-block rounded-sm border border-border/30 px-5 py-1.5 text-sm leading-normal text-foreground hover:border-border/50"
                        >
                            About
                        </Link>
                        {/* ... other links ... */}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                        {/* Use bg-background, text-foreground, and custom shadow with border color */}
                        <div className="flex-1 rounded-lg bg-background p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgb(var(--border)/0.2)] lg:p-20">
                            <p>{greeting}</p>
                            <div className="flex flex-row items-center gap-2 text-xs text-foreground/70">
                                <p className="text-center ">Theme:</p>
                                <ThemeSwitcher />
                            </div>
                            <p>My name is</p>
                            <h1 className="mb-1 font-medium">Mike Yamauchi</h1>

                            <p className="mb-1 ">I am a</p>
                            <h2 className="mb-6 font-medium">Full-Stack Developer</h2>


                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
