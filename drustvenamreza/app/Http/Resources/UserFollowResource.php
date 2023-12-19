<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserResource;

class UserFollowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'statusPracenja' => $this->statusPracenja,
            'datum' => $this->datum,
            'follower_id' => $this->follower_id,
            'followed_id' => $this->followed_id,
            'follower' => new UserResource($this->whenLoaded('follower')), // Prikaz korisnika koji prati
            'followed' => new UserResource($this->whenLoaded('followed')), // Prikaz korisnika koji je pratilac
        ];
    }
}
