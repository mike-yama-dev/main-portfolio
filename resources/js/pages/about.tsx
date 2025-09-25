import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function About({ about }: { about: { title: string, description: string } }) {
    const { auth } = usePage<SharedData>().props;
    console.log(about);
    return (
        <>
<div>
      <h1 className="text-2xl font-bold">About Us & Our Projects</h1>

      <div className="mt-6">
        <h2 className="text-xl">Projects</h2>
        <p>
          {/* We can now map over the projects array */}


              {about.title}

        </p>
        <p className="mt-4">
              {about.description}
        </p>

        <img src="/headshot.jpg" alt="Italian Trulli" className="w-56 h-56" style={{ borderRadius: '100%', margin: '0 auto' }} />

      </div>
    </div>
        </>
    );
}
