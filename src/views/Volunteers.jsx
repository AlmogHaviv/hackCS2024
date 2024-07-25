import { useState } from "react";
import { Stack } from "@mui/system";
import { Grid, Input, Typography } from "@mui/joy";
import PostCard from "../components/PostCard";
import ActionModal from "../components/ActionModal";

/**
 * Fake data
 */
const volData = [
  {
    id: "001",
    title: "Haim Cohen",
    href: "+972-50-4538779",
    description: "From Bat Hefer proffesional in picking and sorting. +972-50-4538779",
    category: "Picking, Sorting",
    image: "https://media.licdn.com/dms/image/D4E03AQERYdcFWl4g3g/profile-displayphoto-shrink_400_400/0/1718245606632?e=1727308800&v=beta&t=kbmqL27kTQWjhJFG-6-PGuG_H-Wg-xEjThQhw4N7OLY",
    review: 3
  }, {
    id: "002",
    title: "Sara Moshe",
    href: "https://github.com/liadbe-genesys/react-app-starter",
    description: "From Yavne proffesional in picking. +972-54-1246785",
    category: "Picking",
    image: "https://media.licdn.com/dms/image/D4D03AQG_pyZRhnNtDw/profile-displayphoto-shrink_400_400/0/1719487499544?e=1727308800&v=beta&t=bGqTARx-sD4OKY8eof7nYoueEXFKw64Fni4w-8gajRA",
    review: 3
  }, {
    id: "003",
    title: "Yaakov Shabtai",
    href: "https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository",
    description: "From Tel Aviv proffesional in Marketing and Management. +972-54-4367546",
    category: "Marketing",
    image: "https://media.licdn.com/dms/image/C4D03AQHqkm3d25F47w/profile-displayphoto-shrink_400_400/0/1643043861813?e=1727308800&v=beta&t=jQKSDTiEVX9sR7gKMOynbZsMT43scQHSmazJoW3uYho",
    review: 3
  }, {
    id: "004",
    title: "Rotem Gabso",
    href: "https://experience.arcgis.com/experience/0b4adbaac0b84c21af90f4ee4a397fe6",
    description: "From Eilat track driving licence . +972-52-1267589",
    category: "Transportation, track",
    image: "https://media.licdn.com/dms/image/D4E03AQE-WnTX6iGDOg/profile-displayphoto-shrink_400_400/0/1719768989280?e=1727308800&v=beta&t=0LFg5E6sfNyHh063S0G05wPjjHlkFmgLM1tkX496BOg",
    review: 3
  }
]

// Init data for the state
const defaultVol = {
  id: '',
  title: '',
  href: '',
  description: '',
  category: '',
  image: 'https://picsum.photos/200',
  review: 3
}

/**
 * VolItems view is basically a view container for <PostCard /> components.
 */
export default function VolItems() {
  const [VolItems, setVolItems] = useState(volData);
  const [NewVol, setNewVol] = useState(defaultVol);
  
  // Title we send to the modal
  const title = "Add New Volunteer";

 // Updated onSave to handle the image
 const onSave = (image) => {
  const post = { ...NewVol, image: image ? URL.createObjectURL(image) : NewVol.image };
  const VolItemsArr = [...VolItems];
  post.id = Math.random();
  VolItemsArr.push(post);

  setVolItems(VolItemsArr);
  setNewVol(defaultVol);
};


  return (
    <>
      <Typography level="h1" sx={{ marginBottom: '1rem' }}>
        Volunteers
      </Typography>
      <Grid direction="row" justifyContent="space-between" container>
        <Grid sm={12} md={8}>
          <Stack 
            direction="column" 
            spacing="1rem"
          >
            {VolItems.map(blog => 
              <PostCard 
                key={blog.id} 
                blog={blog}
                removePost={(id) => {
                  let clonedVolItems = VolItems.slice();
                  const blogIdToRemove = VolItems.findIndex(blog => id === blog.id);
                  if (blogIdToRemove > -1) {
                    clonedVolItems.splice(blogIdToRemove, 1);
                    setVolItems(clonedVolItems);
                  }
                }} 
              />
            )}
          </Stack>
        </Grid>
        <Grid>
          {/** Using the modal */}
          <ActionModal title={title} onSave={onSave}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px'}}>
              <Input placeholder="Title" variant="outlined" onChange={(e) => setNewVol({...NewVol, title: e.target.value})} />
              <Input placeholder="Description" variant="outlined" onChange={(e) => setNewVol({...NewVol, description: e.target.value})}/>
              <Input placeholder="Category" variant="outlined" onChange={(e) => setNewVol({...NewVol, category: e.target.value})}/>
            </div>
          </ActionModal>
        </Grid>
      </Grid>
    </>
  );
}
