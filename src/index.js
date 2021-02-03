
//console.log('Hello ever running Node.js project');
import 'dotenv/config';
import app from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});