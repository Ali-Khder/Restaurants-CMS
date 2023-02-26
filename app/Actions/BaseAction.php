<?php

namespace App\Actions;

use App\Http\Requests\auth\RegisterRequest;
use App\Services\AuthService;
use Lorisleiva\Actions\Concerns\AsAction;

class BaseAction
{
    use AsAction;

    /**
     * The auth service implementation.
     *
     * @var AuthService
     */
    protected AuthService $authService;

    // singleton pattern
    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }
}
