<?php

namespace App\Actions;

use App\Http\Requests\auth\RegisterRequest;
use Lorisleiva\Actions\Concerns\AsAction;

class RegisterAdmin extends BaseAction
{
    use AsAction;

    public function asController(RegisterRequest $request)
    {
        return $this->authService->register($request);
    }
}
