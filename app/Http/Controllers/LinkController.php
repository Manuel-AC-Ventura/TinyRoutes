<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Link;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;


class LinkController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'url' => 'required|url'
        ]);
    
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }
    
        $shortKey = Str::random(6);
    
        while (Link::where('shortened', $shortKey)->exists()) {
            $shortKey = Str::random(6);
        }
    
        $link = new Link([
            'idUser' => Auth::id(), 
            'original' => $request->input('url'),
            'shortened' => $shortKey,
        ]);
    
        if ($request->has('id')) {
            $link->idUser = $request->input('id');
        }
    
        $link->save();
    
        return response()->json([
            'original' => $link->original,
            'shortened' => url('/').'/open/'.$link->shortened,
        ], 201);
    }
    

    public function open($shortened){
        $link = Link::where('shortened', $shortened)->firstOrFail();

        return redirect($link->original);
    }
}
