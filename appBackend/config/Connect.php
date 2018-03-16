<?php

namespace Config;

class Connect{

    private $host = "";
    private $user = "";
    private $pass = "";
    private $db = "";
    private $conexao;

    public function __construct(){
        $this->conexao = mysqli_connect($this->host, $this->user, $this->pass, $this->db, 3306);
        $this->conexao->set_charset("utf8");
    }

    public function testeConnection(){
        if($this->conexao){
            echo "Banco conectado";
        }else{
            echo "Falha ao connectar ao bando";
        }
    }

    public function getConnection(){
        return $this->conexao;
    }

}