<?php

namespace App\Enum;

enum StatusEnum : string
{
    case new = 'Ждет подтверждения';
    case waiting = "Ожидание приема";

    case finished = "Прием завершен";
    case rejected = "Прием отменен";
}
