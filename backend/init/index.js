const mongoose=require("mongoose");
const Listing=require("../models/listing.js");
const initData=require("./data.js");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderLust";
main().then((res)=>{ 
    console.log("connected to DB");
})
.catch((err) => {console.log(err)});

async function main() {
  await mongoose.connect(MONGO_URL);
};

const initDB= async ()=>{ 
    await User.deleteMany({});
    await User.insertMany(initData.data);
    console.log("data was initialized successfully");
};
initDB();
