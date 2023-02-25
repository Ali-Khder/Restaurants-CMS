<?php

namespace App\Services;

use App\Http\Traits\ResponseTrait;
use App\Models\Category;
use App\Models\Menu;
use App\Models\User;

class MenuService
{
    use ResponseTrait;

    public function findAll()
    {
        $myId = auth()->user()->id;
        if ($myId == 1) {
            $response = Menu::paginate(5);
            $msg = 'All Menus';
        } else {
            $response = Menu::where('user_id', $myId)->paginate();
            $msg = 'My Menus';
        }
        return $this->myresponse(true, $msg, $response);
    }

    public function store($request)
    {
        $user = User::find(auth()->user()->id);
        if (!$user->menu) {
            $menu = $user->menu()->create([
                'name' => $request->name,
                'discount' => 0,
            ]);
            $menu->categories()->attach($request->category);
            return $this->myresponse(true, 'Creating Menu Success', $menu);
        } else
            return $this->myresponse(false, 'You already have a menu');
    }

    public function show($id)
    {
        $menu = Menu::find($id);
        if ($menu === null)
            return $this->myresponse(false, 'Menu not found');
        $r = $menu->categories;
        return $this->myresponse(true, 'Menu', $menu);
    }

    public function update($request, $id)
    {
        $menu = Menu::find($id);
        if ($menu === null)
            return $this->myresponse(false, 'Menu not found');

        $menu->update([
            'name' => $request->name
        ]);
        $menuIds = $menu->categories->pluck('id')->toArray();

        if ($request->category_delete) {
            $categoriesToDelete = $request->category_delete;
            foreach ($categoriesToDelete as $category) {
                $menu->categories()->detach($category);
            }
        }

        if ($request->category_add) {
            $categoriesToAdd = $request->category_add;
            foreach ($categoriesToAdd as $category) {
                if (in_array($category, $menuIds)) continue;
                $menu->categories()->attach($category);
            }
        }

        return $this->myresponse(true, 'Updating Menu Success');
    }

    public function destroy($id)
    {
        $menu = Menu::find($id);
        if ($menu === null)
            return $this->myresponse(false, 'Menu not found');
        Menu::destroy($id);
        return $this->myresponse(true, 'Deleting Menu Success');
    }
}
