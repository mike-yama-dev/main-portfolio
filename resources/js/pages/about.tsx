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
      </div>
    </div>
        </>
    );
}
