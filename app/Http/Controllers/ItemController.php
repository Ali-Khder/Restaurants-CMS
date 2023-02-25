<?php

namespace App\Http\Controllers;

use App\Http\Requests\items\AddItemRequest;
use App\Http\Requests\items\UpdateItemRequest;
use App\Http\Traits\ResponseTrait;
use App\Services\ItemService;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    use ResponseTrait;

    /**
     * The auth service implementation.
     *
     * @var ItemService
     */
    protected ItemService $itemService;

    // singleton pattern
    public function __construct(ItemService $itemService)
    {
        $this->itemService = $itemService;
    }

    public function index()
    {
        return $this->itemService->findAll();
    }

    public function store(AddItemRequest $request)
    {
        return $this->itemService->store($request);
    }

    public function show($id)
    {
        return $this->itemService->show($id);
    }

    public function update(UpdateItemRequest $request, $id)
    {
        return $this->itemService->update($request, $id);
    }

    public function destroy($id)
    {
        return $this->itemService->destroy($id);
    }
}
