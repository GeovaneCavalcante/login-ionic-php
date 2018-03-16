<?php

namespace App\Routes\accounts;

use Symfony\Component\HttpFoundation\Request;


class Accounts{

    private $silex;

    public function __construct($silex) {
        $this->silex =  $silex;
    }

    public function start(){


        $this->silex->post('/auth', function (Request $request){

            $dados = json_decode($request->getContent(), true);

            $controller = new \App\Controllers\accounts\Accounts();

            $result = $controller->auth($dados);

            return $this->silex->json($result);

        });

    }


}