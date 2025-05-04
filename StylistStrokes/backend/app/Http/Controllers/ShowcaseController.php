<?php

namespace App\Http\Controllers;

use App\Models\Showcase;
use Illuminate\Http\Request;

class ShowcaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $showcases = Showcase::all();
        return response()->json($showcases);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'style' => 'required|string|max:255',
            'image' => 'nullable|string',
            'description' => 'nullable|string',
        ]);
        Showcase::create($request->all());
        return redirect()->route('showcase.index')->with('success', 'Showcase created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Showcase $showcase)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Showcase $showcase)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Showcase $showcase)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Showcase $showcase)
    {
        //
    }
}
