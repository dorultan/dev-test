<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\User;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/user', function(Request $request) {
  return User::all();
});
// Route::post('/user', function(Request $request) {
//
// });
// Route::middleware('auth:api')->post('/user', 'Controller@createUser');

Route::post('/user', function (Request $request) {
  $user = new User();
  $username = $request->input('firstname');
  $username .= ' ' . $request->input('surname');

  $user->name=$username;
  $user->email=$request->input('email');
  $user->phone=$request->input('phone');
  $user->gender=$request->input('gender');
  $user->comments=$request->input('comments');
  $user->birth=$request->input('birth');
  $user-> save();
  return $user;
});
