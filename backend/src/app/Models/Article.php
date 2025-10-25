<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Article extends Model
{
    use HasFactory;

    protected $table = 'articles';
    protected $fillable = ['title', 'content'];
    protected $casts = ['created_at' => 'date:d-m-Y'];


    protected function title() :Attribute
    {
        return Attribute::make(
            get: function ($value) {
                return ucfirst($value);
            },
            set: fn ($value) => $value
        );
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }
}
