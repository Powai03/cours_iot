import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

let Iot = " Gryffindor ";

const getIot = async (req, res) => {
    return res.json({ Iot: Iot });
};

const postIot = async (req, res) => {
    Iot = req.body.Iot;
    return res.json({ Iot: Iot });
}

export { getIot, postIot };