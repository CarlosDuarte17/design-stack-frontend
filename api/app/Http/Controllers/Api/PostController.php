<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => ['required'],
            'description' => ['required'],
            'tags' => ['required'],
            'image' => ['required']
        ]);

        $file = $request->file('file');

        $path = $file->store('images', 'public');

        $post = $request->user()->posts->create([
            'title' => $data['title'],
            'description' => $data['description'],
            'image' => $path
        ]);

        if  ($post) {
            return true;
        }

        return false;
    }
}
