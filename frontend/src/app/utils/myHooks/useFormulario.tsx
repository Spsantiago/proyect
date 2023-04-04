import { useState, ChangeEvent } from 'react';

export const useFormulario = <T extends Object>(objetoInicial: T) => {
    const [objeto, setobjeto] = useState(objetoInicial);

    const dobleEnlace = ({ target }: ChangeEvent<any>) => {
        const { name, value } = target;
        setobjeto({ ...objeto, [name]: value });
    };

    return {
        objeto,
        dobleEnlace,
        ...objeto,
    };
};
