<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\About;

class AboutController extends Controller
{
    public function about(): Response
    {
        $about = About::first();
        return Inertia::render('about', [
            'about' => $about
        ]);
    }
}
