import app from "./app";
import "reflect-metadata";
import { seedData } from "./seeder";

const PORT = process.env.PORT || 3000;

// seedData()
//   .then(() => {
//     console.log("Seeding script completed.");
//     process.exit(0);
//   })
//   .catch((error) => {
//     console.error("Error in seeding script:", error);
//     process.exit(1);
//   });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
