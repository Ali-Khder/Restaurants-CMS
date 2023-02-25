<?php

namespace App\Services;

use App\Http\Traits\ResponseTrait;
use App\Models\Category;

class CategoryService
{
    use ResponseTrait;

    public function findAllPagination()
    {
        $response = Category::paginate(6);
        return $this->myresponse(true, 'Categories', $response);
    }

    public function findAll()
    {
        $response = Category::all();
        return $this->myresponse(true, 'Categories', $response);
    }

    public function store($request)
    {
        if ($request->parent_id) {
            $parent = Category::find($request->parent_id);

            if ($parent->child_level >= 5)
                return $this->myresponse(
                    false,
                    'Max level of subcategories, choose another parent category'
                );

            $category = Category::create([
                'name' => $request->name,
                'parent_id' => $parent->id,
                'discount' => $request->discount ? $request->discount : $parent->discount,
                'child_level' => $parent->child_level + 1
            ]);
        } else {
            $category = Category::create([
                'name' => $request->name,
                'discount' => $request->discount ? $request->discount : 0
            ]);
        }
        return $this->myresponse(true, 'Creating Category Success', $category);
    }

    public function destroy($id)
    {
        $category = Category::find($id);
        if ($category === null)
            return $this->myresponse(false, 'Category not found');
        Category::destroy($id);
        return $this->myresponse(true, 'Deleting Category Success');
    }
}
