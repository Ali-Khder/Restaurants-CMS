<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Menu extends BaseModel
{
    use HasFactory;

    protected $table = 'menus';

    protected $fillable = [
        'name',
        'discount'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The categories that belong to the menu.
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'menu_categories');
    }
}
