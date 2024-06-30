import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getall = async (req, res) => {
  res.send(await prisma.wouldyourather.findMany());
};
export const update = async (req, res) => {
  const { body, params:{id} } = req;

  try {
    const updatedRecord = await prisma.wouldyourather.update({
      where: { id: parseInt(id) },
      data: { ...body.data },
    });
    res.json(updatedRecord);
  } catch (error) {
    res.status(500).json({ error: "Error updating record" });
  }
};
