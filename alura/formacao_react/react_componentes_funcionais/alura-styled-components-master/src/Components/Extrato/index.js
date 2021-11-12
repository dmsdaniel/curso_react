import React from 'react'
import { Box, Button} from '../UI'
import { extratoLista } from '../../info'
import Items from '../Items/Index'
export const Extrato = () => {
    return (
        <Box>
            {extratoLista.updates.map(({id, type, from, value, date}) => {
                return (
                    <Items key={id} type={type} from={from} value={value} date={date} />
                )
            })}
            <Button>Ver mais</Button>
        </Box>
    )
}

/*
        id: "123131321",
      type: "Restaurante",
      value: "150,00",
      date: "11 JUN",
      from: "Bonna Parma",
      */