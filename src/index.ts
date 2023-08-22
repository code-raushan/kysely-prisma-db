import app from "./app";
const PORT:number = 8080;

app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});