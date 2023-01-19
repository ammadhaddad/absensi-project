<?php

namespace App\Http\Controllers;

use App\Models\Position;
use Illuminate\Http\Request;

class PositionController extends Controller
{
    public function index()
    {
        return view('positions.index', [
            "title" => "Kelas / Jurusan"
        ]);
    }

    public function create()
    {
        return view('positions.create', [
            "title" => "Tambah Data Kelas / Jurusan"
        ]);
    }

    public function edit()
    {
        $ids = request('ids');
        if (!$ids)
            return redirect()->back();
        $ids = explode('-', $ids);

        $positions = Position::query()->whereIn('id', $ids)->get();

        return view('positions.edit', [
            "title" => "Edit Data Kelas / Jurusan",
            "positions" => $positions
        ]);
    }
}
