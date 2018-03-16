<?php


namespace App\Controllers\accounts;

use \App\Routes\JWTWrapper;

class Accounts{

    private $modelUser;

    public function __construct()
    {
         $this->modelUser = new \App\Models\accounts\Accounts();
    }

    public function auth($dados){

        $user = $this->modelUser->getUser($dados['user'])['resultado'];

        if($dados['user'] == $user['NomeUsuario']  && $dados['pass'] == $user['SenhaUsuario']) {

            $jwt = JWTWrapper::encode([
                'expiration_sec' => 3600,
                'iss' => 'lucena.devs',
                'userdata' => $user
            ]);

            return[
                'login' => 'true',
                'access_token' => $jwt
            ];
        }

        return [
            'login' => 'false',
            'message' => 'Login Inválido',
        ];

    }
}