// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
  {
    id: 1,
    name: "Devaanu",
    job: "Back End Developer",
    greeting: "Halo bro semua!",
    photo: "image-1.png",
  },
  {
    id: 2,
    name: "Arkaan",
    job: "FrontEnd Developer",
    greeting: "Hello hehe mantap",
    photo: "image-2.png",
  },
  {
    id: 3,
    name: "Dirgantara",
    job: "UI/UX Designer",
    greeting: "Hayyyyyyyyyyyyyyyyy",
    photo: "image-3.png",
  },
  {
    id: 4,
    name: "Devaanu Arkaan Dirgantara",
    job: "UWUW",
    greeting: "Hayyyyyyyyyyy",
    photo: "image-4.png",
  },
  ]);
}
