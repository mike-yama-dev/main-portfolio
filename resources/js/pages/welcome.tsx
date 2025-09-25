import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
 <div className="flex min-h-screen flex-col items-center bg-background p-6 text-foreground lg:justify-center lg:p-8">
                <header className="mb-6 w-full max-w-[335px] text-sm lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        <ThemeSwitcher />
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
                            <h1 className="mb-1 text-center font-medium">Mike Yamauchi</h1>
                            <img src="/headshot.jpg" alt="Italian Trulli" className="mb-2 w-56" style={{ borderRadius: '10rem' }} />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
