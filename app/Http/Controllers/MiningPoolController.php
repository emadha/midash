<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Inertia\Response;

class MiningPoolController extends Controller
{
    const API_URL                        = 'https://api.minerstat.com/v2/pools';
    const CACHE_MINING_POOL_API_RESPONSE = 'miningpool.api.pools.response';

    public static function MiningPoolsListFromAPI()
    {
        $miningPoolCachedResponse = Cache::get(self::CACHE_MINING_POOL_API_RESPONSE);

        if ( !$miningPoolCachedResponse ) {
            $httpRequest = Http::get(self::API_URL);
            Cache::put(self::CACHE_MINING_POOL_API_RESPONSE, $httpRequest->body());
        }

        $miningPoolCachedResponse = Cache::get(self::CACHE_MINING_POOL_API_RESPONSE);

        $jsonDecoded = json_decode($miningPoolCachedResponse);
        $jsonDecoded = array_slice($jsonDecoded,0,10);

        return Response([ 'list' => $jsonDecoded ]);
    }

}
