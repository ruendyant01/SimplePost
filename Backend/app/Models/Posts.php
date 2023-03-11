<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Posts extends Model
{
    use HasFactory;

    protected $fillable = ["title", "body"];

    protected static function booted() : void {
        static::creating(function(Posts $post) {
            $post->slug = Str::slug($post->title);
        });
    }
}
