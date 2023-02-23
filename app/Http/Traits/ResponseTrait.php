<?php

namespace App\Http\Traits;

trait ResponseTrait
{
    // helper function to global responses
    public function myresponse($status, $msg, $data = null)
    {
        $response = [
            'status' => $status,
            'message' => $msg,
            'data' => $data,
        ];
        return response($response);
    }
}
