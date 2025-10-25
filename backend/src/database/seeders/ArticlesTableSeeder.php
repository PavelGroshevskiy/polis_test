<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Comment;
use Illuminate\Database\Seeder;

class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $articles = Article::factory(5)->create();

        $articles->each(function ($article) {
            Comment::factory(rand(2, 3))->create([
                'article_id' => $article->id,
            ]);
        });
    }
}
