<?php

namespace App\Services;

use App\Http\Traits\ResponseTrait;
use App\Models\User;
use Illuminate\Http\Request;

class AuthService
{
    use ResponseTrait;

    public function register($request)
    {
        $user = User::create([
            'name' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $token = $user->createToken('RegirterToken')->accessToken;
        $response = [
            'user' => $user,
            'token' => $token
        ];
        return $this->myresponse(true, 'Register Success', $response);
    }

    public function login($request)
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
