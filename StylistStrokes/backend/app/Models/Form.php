<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    protected $fillable =[
        'full_name',
    'company_email',
    'country',
    'business_type',
    'comments'];
}
