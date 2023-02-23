<?php

namespace App\Services;

use App\Http\Traits\ResponseTrait;
use App\Models\User;
use App\Services\Validations\AuthValidationService;
use Illuminate\Http\Request;

class AuthService
{
    use ResponseTrait;

    public function register(Request $request)
    {
        $user = User::create([
            'name' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $token = $user->createToken('RegirterToekn')->accessToken;
        $response = [
            'user' => $user,
            'token' => $token
        ];
        return $this->myresponse(true, 'Register Success', $response);
    }

    public function login(Request $request)
    {
        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];
        if (auth()->attempt($data)) {
            $user = User::find(auth()->user()->id);
            $token = $user->createToken('LoginToken')->accessToken;
            $response = [
                'user' => $user,
                'token' => $token
            ];
            return $this->myresponse(true, 'Login success', $response);
        } else
            return $this->myresponse(false, 'Password is wrong');
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return $this->myresponse(true, 'Logut sucess');
    }
}
