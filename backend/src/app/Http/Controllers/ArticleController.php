<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Comment;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles =  Article::all();
        if (empty($articles)) {
            return;
        }
        return $articles;
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $article = Article::create(
            [
                'title' => $request->title,
                'content' => $request->content,
            ]
        );

        return response()->json([
            'data' => $article,
            'message' => 'Article retrieved successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $article = Article::with('comments')->find($id);

        if (!$article) {
            return response()->json([
                'message' => 'Article not found'
            ], 404);
        }

        return response()->json([
            'data' => $article,
            'message' => 'Article retrieved successfully'
        ]);
    }

    /**
     * Add Comment
     */
    public function addCommentToArticle($id, Request $request)
    {
        $article = Article::findOrFail($id);
        if (!$article) {
            return response()->json([
                'message' => 'Article not found'
            ], 404);
        }
        $newComment = new Comment($request->all());
        $article->comments()->save($newComment);

        return response()->json([
            'success' => true,
            'data' => $newComment,
            'message' => 'Comment added successfully'
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        return response()->json([
            'message' => 'Not implemented'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        return response()->json([
            'message' => 'Not implemented'
        ]);
    }
}
