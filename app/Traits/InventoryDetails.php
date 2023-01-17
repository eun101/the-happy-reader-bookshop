<?php

namespace App\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Attachment;
use Illuminate\Support\Facades\Auth;

trait InventoryDetails
{
    public function saveInventoryDetails(Request $request){

        if($attachmentFiles){

            $attachedFile = $attachmentFiles['attachment'];
            if($asPublic){
                $storagePath = Storage::put($folderPath, $attachedFile,'s3');
            }else{
                $storagePath = Storage::put($folderPath, $attachedFile);
            }

            $attachment = new Attachment();
            $attachment->created_by = Auth::user()->id;
            $attachment->att_storage_path = $storagePath;
            $attachment->att_filename = $attachedFile->getClientOriginalName();
            $attachment->att_filesize = $attachedFile->getSize();
        }

        return $attachment;

    }
}
