<?php

namespace App\Services;

use App\Http\Traits\ResponseTrait;
use App\Models\Category;
use App\Models\Item;

class ItemService
{
    use ResponseTrait;

    public function findAll()
    {
        $items = Item::paginate(6);
        return $this->myresponse(true, 'Items', $items);
    }

    public function store($request)
    {
        $category = Category::find($request->category_id);
        $item = $category->items()->create([
            'name' => $request->name,
            'price' => $request->price,
            'discount' => $request->discount ? $request->discount : $category->discount
        ]);
        return $this->myresponse(true, 'Creating Item Success', $item);
    }

    public function show($id)
    {
        $item = Item::find($id);
        if ($item === null)
            return $this->myresponse(false, 'Item not found');
        return $this->myresponse(true, 'Item', $item);
    }

    public function update($request, $id)
    {
        $item = Item::find($id);
        if ($item === null)
            return $this->myresponse(false, 'Item not found');

        $item = $item->update([
            'name' => $request->name ? $request->name : $item->name,
            'price' => $request->price ? $request->price : $item->price,
            'discount' => $request->discount ? $request->discount : $item->discount,
            'category_id' => $request->category_id ? $request->category_id : $item->category_id
        ]);
        return $this->myresponse(true, 'Updating Item Success');
    }

    public function destroy($id)
    {
        $item = Item::find($id);
        if ($item === null)
            return $this->myresponse(false, 'Item not found');
        Item::destroy($id);
        return $this->myresponse(true, 'Deleting Item Success');
    }
}
