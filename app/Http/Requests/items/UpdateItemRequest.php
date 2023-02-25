<?php

namespace App\Http\Requests\items;

use App\Http\Requests\BaseRequest;
use Illuminate\Foundation\Http\FormRequest;

class UpdateItemRequest extends BaseRequest
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
            'name' => 'string|min:3|max:25',
            'category_id' => 'numeric|min:1|exists:categories,id',
            'price' => 'numeric|min:1',
            'discount' => 'numeric|max:99'
        ];
    }
}
