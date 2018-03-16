<?php

namespace App\Models\accounts;


class Accounts
{

    private $connect;

    public function __construct(){
        $this->connect = new \Config\Connect();
    }

    public function getUser($user)
    {

        $sql = "SELECT CodUsuario, NomeUsuario, SenhaUsuario FROM tusuarios where '$user' = NomeUsuario";
        $result = $this->connect->getConnection()->query($sql);

        $resultado = mysqli_fetch_assoc($result);

        if ($resultado) {
            return ["status" => 200, "resultado" => $resultado];
        } else {
            return ["status" => 404, "resultado" => "Nada encontrado"];
        }

    }

}