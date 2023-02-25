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
        $msg = 'All Menus';
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
            return $this->myresponse(true, 'Creating Menu Success', $menu);
        } else
            return $this->myresponse(true, 'You already have a menu');
    }

    public function update($request, $id)
    {
        $menu = Menu::find($id);
        if ($menu === null)
            return $this->myresponse(false, 'Menu not found');
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
