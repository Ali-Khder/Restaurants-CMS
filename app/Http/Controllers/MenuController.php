<?php

namespace App\Http\Controllers;

use App\Http\Requests\menus\AddMenuRequest;
use App\Http\Requests\menus\UpdateMenuRequest;
use App\Http\Traits\ResponseTrait;
use App\Services\MenuService;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    use ResponseTrait;

    /**
     * The auth service implementation.
     *
     * @var MenuService
     */
    protected $menuService;

    // singlton pattern
    public function __construct(MenuService $menuService)
    {
        $this->menuService = $menuService;
    }

    public function index()
    {
        return $this->menuService->findAll();
    }

    public function store(AddMenuRequest $request)
    {
        return $this->menuService->store($request);
    }

    public function update(UpdateMenuRequest $request, $id)
    {
        return $this->menuService->update($request, $id);
    }

    public function destroy($id)
    {
        return $this->menuService->destroy($id);
    }
}
