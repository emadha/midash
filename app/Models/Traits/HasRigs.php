<?php

namespace App\Models\Traits;

use App\Models\Rig;

trait HasRigs
{
    public function rigs()
    {
        return $this->hasMany(Rig::class);
    }
}