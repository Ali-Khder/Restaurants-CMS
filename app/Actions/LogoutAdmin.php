<?php

namespace App\Actions;

use Illuminate\Http\Request;
use Lorisleiva\Actions\Concerns\AsAction;

class LogoutAdmin extends BaseAction
{
    use AsAction;

    public function asController(Request $request)
    {
        return $this->authService->logout($request);
    }
}
