<?php


namespace App\Routes;
use \Firebase\JWT\JWT;

class JWTWrapper
{

    const KEY = 'UgY6NcncFqqXbyCzrxP1oyk1Sa5akwft';

    public static function encode(array $options)
    {

        $issuedAt = time();
        $expire = $issuedAt + $options['expiration_sec'];

        $token = array(
            'iat'  => $issuedAt,            // timestamp de geracao do token
            'iss'  => $options['iss'],      // dominio, pode ser usado para descartar tokens de outros dominios
            'exp'  => $expire,              // expiracao do token
            'nbf'  => $issuedAt - 1,        // token nao eh valido Antes de
            'data' => $options['userdata'], // Dados do usuario logado
        );

        $jwt = JWT::encode($token, self::KEY);
        return $jwt;
    }

    /**
     * Decodifica token jwt
     */
    public static function decode($jwt)
    {
        return JWT::decode($jwt, self::KEY, ['HS256']);
    }
}