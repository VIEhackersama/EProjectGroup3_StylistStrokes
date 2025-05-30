<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Showcase extends Model
{
    protected $fillable =[
        'title',
        'author',
        'style',
        'image',
        'description'
    ];
}
