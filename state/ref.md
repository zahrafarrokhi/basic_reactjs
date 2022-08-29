### ref

```jsx
import { useRef } from "react";
const fileRef = useRef();
```

```jsx
<div className="flex items-center basis-[65%]  h-12 p-2 rounded-lg font-bold">
  انتخاب فایل:
  <input ref={fileRef} />
  <Button onClick={() => fileRef.current?.click()}>آپلودفایل</Button>
</div>
```
```jsx
import { Button, IconButton, TextField } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { ImPause2 } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi";

function App() {
  // state
  const [title, setTitle] = useState("");
  const [pause, setPause] = useState(false);
  const [file, setFile] = useState();
  const fileRef = useRef();
 

  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="flex flex-col shadow-lg self-center my-4 gap-4 basis-[30rem] min-h-40 p-6 border-2 border-solid border-primary rounded-lg">

      <TextField
          fullWidth
          label="عنوان جلسه"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
 <div className="flex items-center basis-[65%]  h-12 p-2 rounded-lg font-bold">
            انتخاب فایل:
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              ref={fileRef}
              className="hidden"
            />
            <Button
              variant="contained"
              color="primary"
              className="mx-4"
              onClick={() => fileRef.current?.click()}
            >
              آپلودفایل
            </Button>
          </div>
      
      
          <div className="relative rounded-full self-center">
            {pause && (
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
                  ? "primary.main"
                  : "primary.contrastText",
                color: pause ? "primary.contrastText" : "primary.main",
                "&:focus,&:active": {
                  backgroundColor: pause
                    ? "primary.main"
                    : "primary.contrastText",
                  color: pause ? "primary.contrastText" : "primary.main",
                },
              }}
            >
              {!pause && <FaMicrophone className="text-lg" />}
              {pause && <ImPause2 className="text-lg" />}
            </IconButton>
          </div>
     
     </div>
   
    </div>
  );
}

export default App;

```