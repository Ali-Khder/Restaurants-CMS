<?php

namespace App\Http\Requests\menus;

use App\Http\Requests\BaseRequest;
use Illuminate\Foundation\Http\FormRequest;

class AddMenuRequest extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|min:3|max:25',
            'parent_id' => 'numeric|min:1|exists:categories,id',
            'discount' => 'numeric|min:1|max:99'
        ];
    }
}
