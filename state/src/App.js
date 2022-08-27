import { Button, TextField } from "@mui/material";
import { useEffect, useMemo, useState } from "react";


function App() {
  // state
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const error = useMemo(() => {
    if (phone.length ==0 ||/^09[0-9]{9}$/g.test(phone)) {
      return ""
    }
    else {
     return("شماره‌ی واردشده قابل قبول نمی‌باشد.");
    }
    
  },[phone])
 

  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="flex flex-col shadow-lg self-center my-4 gap-4 basis-[30rem] min-h-40 p-6 border-2 border-solid border-stone-300 rounded-lg">
        <TextField
          fullWidth
          label="شماره همراه"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={error}
          helperText={error}
          inputProps={{ style: { textAlign: "center" } }}
        />
        <TextField
          type="password"
          fullWidth
          label="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <div className="flex justify-between md:justify-around w-[95%] md:w-[80%] self-center text-sm mt-14">
        <Button
          variant="contained"
          // disabled={error || phone.length === 0 || password.length === 0}
          // onClick={submit}
        >
          ورود{" "}
        </Button>
        <Button
          variant="outlined"
          className="rounded-lg bg-white p-2"
          // onClick={() => router.push("/auth/forget-password")}
        >
          فراموشی رمز عبور{" "}
        </Button>
      </div>
      </div>
 

     
    </div>
  );
}

export default App;
