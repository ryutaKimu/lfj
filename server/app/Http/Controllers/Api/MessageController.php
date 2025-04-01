<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function getMessage(): JsonResponse{
        return response()->json([
            'message' => "success Connecting APi"
        ]);
    }
}
