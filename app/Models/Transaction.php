<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'loyalty_points',
        'transaction_type_id',
    ];

    public function user()
    {
        return $this->belongsTo('\App\Models\User', 'user_id');
    }

    public function transaction_type()
    {
        return $this->belongsTo('\App\Models\TransactionType', 'transaction_type_id');
    }
}
