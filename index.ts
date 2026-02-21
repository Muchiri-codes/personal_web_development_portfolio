import { db } from "./lib/prisma";
async function main() {
  const request = await db.clientRequest.create({ // Changed from 'user' to 'clientRequest'
    data: {
      name: "John Muchiri", 
      email: "tyresejonesog9@gmail.com", 
      subject:"my perosnal website",
      message: "I need a landing page for my bakery.",
    }, 
  }); 
  console.log(request); 
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });