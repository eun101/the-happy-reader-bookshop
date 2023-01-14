<?php

namespace App\Http\Controllers;

use App\Models\OptionGroup;
use App\Http\Requests\StoreOptionGroupRequest;
use App\Http\Requests\UpdateOptionGroupRequest;

class OptionGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOptionGroupRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOptionGroupRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OptionGroup  $optionGroup
     * @return \Illuminate\Http\Response
     */
    public function show(OptionGroup $optionGroup)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OptionGroup  $optionGroup
     * @return \Illuminate\Http\Response
     */
    public function edit(OptionGroup $optionGroup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOptionGroupRequest  $request
     * @param  \App\Models\OptionGroup  $optionGroup
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOptionGroupRequest $request, OptionGroup $optionGroup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OptionGroup  $optionGroup
     * @return \Illuminate\Http\Response
     */
    public function destroy(OptionGroup $optionGroup)
    {
        //
    }
}
