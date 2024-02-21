<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\LinkController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function(){
	return Inertia::render('Home', [
        'user' => Auth::user(),
		'canLogin' => Route::has('login'),
		'canRegister' => Route::has('register')
	]);
});

Route::get('/open/{shortened}', [LinkController::class, 'open'])->name('open');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'user' => Auth::user(),
    ]);
})->name('dashboard');

Route::get('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

require __DIR__.'/auth.php';
