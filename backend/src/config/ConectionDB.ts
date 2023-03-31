import { connect } from 'mongoose';

const ConectionDB = () => {
    const URL = String(process.env.DB_MONGO);
    connect(URL)
        .then(() => {
            console.log('estas conetado a ', process.env.DB_MONGO);
        })
        .catch((miError) => {
            console.log('no se encontro la conexion a mongo', miError);
        });
};
export default ConectionDB;
