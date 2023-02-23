<?php

namespace App\Http\Controllers;

use App\Http\Requests\auth\LoginRequest;
use App\Http\Requests\auth\RegisterRequest;
use App\Http\Traits\ResponseTrait;
use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    use ResponseTrait;

    /**
     * The auth service implementation.
     *
     * @var AuthService
     */
    protected $authService;

    // singlton pattern
    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function register(RegisterRequest $request)
    {
        return $this->authService->register($request);
    }

    public function login(LoginRequest $request)
    {
        return $this->authService->login($request);
    }

    public function logout(Request $request)
    {
        return $this->authService->logout($request);
    }
}
