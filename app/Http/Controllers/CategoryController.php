<?php

namespace App\Http\Controllers;

use App\Http\Requests\categories\AddCategoryRequest;
use App\Http\Traits\ResponseTrait;
use App\Services\CategoryService;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    use ResponseTrait;

    /**
     * The auth service implementation.
     *
     * @var CategoryService
     */
    protected CategoryService $categoryService;

    // singleton pattern
    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    public function index()
    {
        return $this->categoryService->findAllPagination();
    }

    public function parents()
    {
        return $this->categoryService->findAll();
    }

    public function store(AddCategoryRequest $request)
    {
        return $this->categoryService->store($request);
    }

    public function destroy($id)
    {
        return $this->categoryService->destroy($id);
    }
}
