import { Button, Checkbox, FormControlLabel, Box } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";


function App() {
  // state
  const [totalchecked, setChecked] = useState({
    ch01: false, ch02: false, ch03: false, ch04: false,
  });
  const CheckboxList = [
    {
      name: 'parent1',
      children: [
        {
          id: 'ch01',
          name:'child1'

        },
        {
          id: 'ch02',
          name:'child2'
        },
       
      ]
    },
    {
      name: 'parent2',
      children: [
        {
          id: 'ch03',
          name:'child1'

        },
        {
          id: 'ch04',
          name:'child2'
        },
      ]
  },
]


  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="flex flex-col shadow-lg self-center items-start my-4 gap-4 basis-[30rem] min-h-40 p-6 border-2 border-solid border-primary rounded-lg">



  {CheckboxList.map((check)=>  <div>
      <FormControlLabel
        label={check.name}
        control={
          <Checkbox
            //chidren => {name,id } and totalchecked =>{ch01:t,ch02:f...}
            // checked={check.children.map((c)=>totalchecked[c.id]).filter(c=>c==false).length == 0}
            checked={check.children.map((c) => totalchecked[c.id]).reduce((prev, cur) => prev && cur, true)}
            // At least one child is checked
            // checked={check.children.map((c)=>totalchecked[c.id]).filter(c=>c==true).length > 0  && check.children.map((c)=>totalchecked[c.id]).filter(c=>c==false).length !== 0}
            indeterminate={check.children.map((c) => totalchecked[c.id]).reduce((prev, cur) => prev || cur, false) && check.children.map((c)=>totalchecked[c.id]).filter(c=>c==false).length !== 0}
            onChange={(e) => {
              let newchecked = { ...totalchecked, };

              for (let ch of check.children) {
                newchecked[ch.id] = e.target.checked
              }
    
              setChecked(newchecked)
            }} />
        }
      />
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      {check.children.map((child)=>
        <FormControlLabel
        label={child.name}
        control={
          <Checkbox
            checked={totalchecked[child.id]}
            onChange={(e) =>
              setChecked({ ...totalchecked, [child.id]:e.target.checked })
            } />
        }
      />)
      }
      </Box >
    </div>

)}

      

      </div>
    </div>
  );
}

export default App;
