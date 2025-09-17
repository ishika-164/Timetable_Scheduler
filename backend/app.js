const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");
const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");
 

const userRouter=require("./routes/user.js");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderLust";

main().then((res)=>{ 
    console.log("connected to MongoDB");
})
.catch((err) => {console.log(err)});

async function main() {
  await mongoose.connect(MONGO_URL);
}

const sessionOptions={
    secret:"mysupersecretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now()+1000*7*24*60*60,
        maxAge:1000*24*60*60*7,
        httpOnly:true,
    },
};

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.engine("ejs",ejsMate);
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));


app.get("/",(req,res)=>{
    res.send("app is working");
});

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    next();
});

// app.get("/registerUser",async(req,res)=>{
//     let fakeUser=new User({
//         email:"student@gmail.com",
//         username:"vishakha",

//     });
//     let newUser=await User.register(fakeUser,"hello");
//     res.send(newUser);
// });


app.use("/",userRouter);


app.all("/{*any}",(req,res,next)=>{
    next(new ExpressError(404,"page not found"));
});
app.use((err,req,res,next)=>{ 
    let { statusCode=500,message="something went wrong" }=err;
    res.status(statusCode).render("error.ejs",{message});
}); 
app.listen(3000,()=>{ 
    console.log("app is listening on port:3000");
});
