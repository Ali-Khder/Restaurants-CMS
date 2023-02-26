<?php

namespace App\Actions;

use App\Http\Requests\auth\LoginRequest;
use Lorisleiva\Actions\Concerns\AsAction;

class LoginAdmin extends BaseAction
{
    use AsAction;

    public function asController(LoginRequest $request)
    {
        return $this->authService->login($request);
    }
}
