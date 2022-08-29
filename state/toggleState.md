### toggleState

State and onClick
```jsx
// const [pause, setPause] = useState(true);
// onClick={() => setPause(!pause)}
// onClick={() => pause ? setPause(false) : setPause(true)}
// onClick={() => setPause(pause ? false : true)}
// 
const [pause, setPause] = useState(true);
<IconButton
              className="shadow-xl self-center w-20 aspect-square "
              color="primary"
              onClick={() => setPause(!pause)}
              // onClick={() => pause ? setPause(false) : setPause(true)}
              // onClick={() => setPause(pause ? false : true)}
              >
 </IconButton>             
```
state and anime and bg
```jsx
// 
// const [pause, setPause] = useState(true);

// pause = f => show anime
//  {!pause && (
//    <div className="bg-primary animate-ping absolute inset-0 rounded-full" />
//  )}

//  <IconButton
//               className="shadow-xl self-center w-20 aspect-square "
//               color="primary"
//               onClick={() => setPause(!pause)}
//  >

//     {pause && <FaMicrophone className="text-lg" />}
//      {!pause && <ImPause2 className="text-lg" />}
//  </IconButton>          
//
const [pause, setPause] = useState(true);
// pause = f => show anime
 {!pause && (
   <div className="bg-primary animate-ping absolute inset-0 rounded-full" />
 )}
  <IconButton
              className="shadow-xl self-center w-20 aspect-square "
              color="primary"
              onClick={() => setPause(!pause)}
             
              sx={{
                backgroundColor: pause
                  ? "primary.contrastText"
                  : "primary.main",
                color: pause ? "primary.main" : "primary.contrastText",
                //focus & active (bg & color)
                "&:focus,&:active": {
                  backgroundColor: pause
                    ? "primary.contrastText"
                    : "primary.main",
                  color: pause ? "primary.main" : "primary.contrastText",
                },
              }}
            >

    {pause && <FaMicrophone className="text-lg" />}
     {!pause && <ImPause2 className="text-lg" />}
 </IconButton>          
```
full code 
```jsx

  <div className="relative rounded-full self-center">
            {!pause && (
              <div className="bg-primary animate-ping absolute inset-0 rounded-full" />
            )}
            <IconButton
              className="shadow-xl self-center w-20 aspect-square "
              color="primary"
              onClick={() => setPause(!pause)}
              // onClick={() => pause ? setPause(false) : setPause(true)}
              // onClick={() => setPause(pause ? false : true)}
              sx={{
                backgroundColor: pause
                  ? "primary.contrastText"
                  : "primary.main",
                color: pause ? "primary.main" : "primary.contrastText",
                "&:focus,&:active": {
                  backgroundColor: pause
                    ? "primary.contrastText"
                    : "primary.main",
                  color: pause ? "primary.main" : "primary.contrastText",
                },
              }}
            >
              {pause && <FaMicrophone className="text-lg" />}
              {!pause && <ImPause2 className="text-lg" />}
            </IconButton>
          </div>
```