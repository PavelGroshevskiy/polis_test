<?php

use App\Http\Controllers\ArticleController;
use Illuminate\Support\Facades\Route;

Route::post(
    'article/{id}/comments', 
    [ArticleController::class, 'addCommentToArticle']
);
Route::apiResource('/articles', ArticleController::class);
