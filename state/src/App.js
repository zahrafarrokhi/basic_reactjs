import { Bookmark, BookmarkBorder, Favorite, FavoriteBorder } from "@mui/icons-material";
import { Button, Checkbox, FormControlLabel, IconButton, TextField } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";

function App() {
  // state
  const [totalchecked, setChecked] = useState({
    check:false,heart:false,book:true
  }
   
  );
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="flex flex-col shadow-lg self-center items-start my-4 gap-4 basis-[30rem] min-h-40 p-6 border-2 border-solid border-primary rounded-lg">
        <Checkbox
          checked={totalchecked.check}
          onChange={(e)=>setChecked({ ...totalchecked, check: e.target.checked })}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Checkbox
           checked={totalchecked.heart}
           onChange={(e)=>setChecked({ ...totalchecked, heart: e.target.checked })}
          icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
<Checkbox
  checked={totalchecked.book}
  onChange={(e)=>setChecked({ ...totalchecked, book: e.target.checked })}
  icon={<BookmarkBorder />}
  checkedIcon={<Bookmark />}
        />
        
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />

      </div>
    </div>
  );
}

export default App;
