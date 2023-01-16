<?php

namespace App\Models\Traits;

use App\Models\Wallet;

trait HasWallets
{
    public function wallets()
    {
        return $this->hasMany(Wallet::class);
    }
}