@extends('layouts.app')

@section('content')

<div>
    <div class="row">
        <div class="col-md-12">
            <center>
                <div class="profilPicture">
                    <img src="assets/img/profile.png" style="width: 25%;" alt="#">
                    <h2><b>Learn With Chalvin</b></h2>
                    <!-- <marquee width="50%" direction="left">[Ubah Text Berjalan Halaman Depan Disini Pada Setting Aplikasi]</marquee> -->
                </div>
            </center>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-md-3">
            <div class="card shadow m-1">
                <div class="card-body">
                    <h6 class="fs-6 fw-light">Data Kelas/Jurusan</h6>
                    <h4 class="fw-bold">{{ $positionCount }}</h4>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card shadow m-1">
                <div class="card-body">
                    <h6 class="fs-6 fw-light">Data Siswa</h6>
                    <h4 class="fw-bold">{{ $userCount }}</h4>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card shadow m-1">
                <div class="card-body">
                    <center>
                        <div id="date-and-clock mt-3">
                        <h3 id="clocknow"></h3>
                        <h3 id="datenow"></h3>
                    </center>
                    
                </div>
            </div>
        </div>
    </div>
</div>
@endsection 

@push('script')
<script type="module" src="{{ asset('js/time.js') }}"></script>
@endpush