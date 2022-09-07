#### checkbox

```jsx
//state
const [checked, setChecked] = useState(false);
<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  inputProps={{ "aria-label": "controlled" }}
/>;
```

### multiple checkboxes

```jsx
 // state
  const [totalchecked, setChecked] = useState({
    check:false,heart:false,book:true
  }

  );

<Checkbox
  checked={totalchecked.check}
  onChange={(e)=>setChecked({ ...totalchecked, check: e.target.checked })}

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
```
## code
```jsx
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import { Button, Checkbox, IconButton, TextField } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";

function App() {
  // state
  const [totalchecked, setChecked] = useState({
    check: false,
    heart: false,
    book: true,
  });
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="flex flex-col shadow-lg self-center items-start my-4 gap-4 basis-[30rem] min-h-40 p-6 border-2 border-solid border-primary rounded-lg">
        <Checkbox
          checked={totalchecked.check}
          onChange={(e) =>
            setChecked({ ...totalchecked, check: e.target.checked })
          }
          inputProps={{ "aria-label": "controlled" }}
        />
        <Checkbox
          checked={totalchecked.heart}
          onChange={(e) =>
            setChecked({ ...totalchecked, heart: e.target.checked })
          }
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
        <Checkbox
          checked={totalchecked.book}
          onChange={(e) =>
            setChecked({ ...totalchecked, book: e.target.checked })
          }
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
        />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />

      </div>
    </div>
  );
}

export default App;
```
### Indeterminate checkbox

```jsx
//state
  const [totalchecked, setChecked] = useState({
    child1:false,child2:false,book:true
  }
   
  );
//children
  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={totalchecked.child1}  onChange={(e) =>
          setChecked({ ...totalchecked, child1: e.target.checked })
        } />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={totalchecked.child2}  onChange={(e) =>
          setChecked({ ...totalchecked, child2: e.target.checked })
        } />}
      />
    </Box>)
//parent

    <div>
      <FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={totalchecked.child1 && totalchecked.child2}
            indeterminate={totalchecked.child1  !== totalchecked.child2}
            onChange={(e) =>
              setChecked({ ...totalchecked, child1: e.target.checked, child2: e.target.checked })
            } />
        }
      />
      {children}
    </div>
```
```jsx
import { Button, Checkbox, FormControlLabel, Box } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";


function App() {
  // state
  const [totalchecked, setChecked] = useState({
    child1:false,child2:false,book:true
  }
   
  );

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={totalchecked.child1}  onChange={(e) =>
          setChecked({ ...totalchecked, child1: e.target.checked })
        } />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={totalchecked.child2}  onChange={(e) =>
          setChecked({ ...totalchecked, child2: e.target.checked })
        } />}
      />
    </Box>
  );

  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="flex flex-col shadow-lg self-center items-start my-4 gap-4 basis-[30rem] min-h-40 p-6 border-2 border-solid border-primary rounded-lg">



    <div>
      <FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={totalchecked.child1 && totalchecked.child2}
            indeterminate={totalchecked.child1  !== totalchecked.child2}
            onChange={(e) =>
              setChecked({ ...totalchecked, child1: e.target.checked, child2: e.target.checked })
            } />
        }
      />
      {children}
    </div>


      </div>
    </div>
  );
}

export default App;

```