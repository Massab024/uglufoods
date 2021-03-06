<?php

namespace App\Http\Controllers;

use App\Http\Resources\CollectionOptionsResource;
use App\Http\Resources\ProductOptionsResource;
use App\Models\Collection;
use App\Models\Product;
use Illuminate\Http\Request;

class DefaultController extends Controller
{
    public function getCollections()
    {
        $collections = Collection::all();
        $collections = CollectionOptionsResource::collection($collections);
        return response()->json([
            'success' => true,
            'message' => 'Collections retrieved successfully!',
            'data' => $collections,
        ]);
    }
    public function getProducts()
    {
        $products = Product::all();
        $products = ProductOptionsResource::collection($products);
        return response()->json([
            'success' => true,
            'message' => 'Products retrieved successfully!',
            'data' => $products,
        ]);
    }
}
