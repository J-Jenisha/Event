import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 1700, height: 750 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img href="http://localhost:3000/whatwedo"
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'imge/dj.jpg',
    title: 'Party Events',
    author: '@zeroDegree',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'imge/wed2.jpg',
    title: 'Wedding Events',
    author: '@zeroDegree',
  },
  {
    img: 'imge/hbd.jpg',
    title: 'Birthday Events',
    author: '@zeroDegree',
  },
  {
    img: 'imge/happy.jpg',
    title: 'Get Together Events',
    author: '@zeroDegree',
    cols: 2,
  },
  {
    img: 'imge/award2.jpg',
    title: 'Award Function',
    author: '@zeroDegree',
    cols: 2,
  },
  {
    img: '/imge/flower.jpg',
    title: 'Flower',
    author: '@zeroDegree',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'imge/wed1.jpg',
    title: 'Wedding Events',
    author: '@zeroDegree',
  },
  {
    img: 'imge/childs.jpg',
    title: 'Family Function',
    author: '@zeroDegree',
  },
  {
    img: 'imge/marr.jpg',
    title: 'Wedding Events',
    author: '@zeroDegree',
    rows: 2,
    cols: 2,
  },
  {
    img: 'imge/color.jpg',
    title: 'Annivesary',
    author: '@zeroDegree',
  },
  {
    img: 'imge/happy.jpg',
    title: 'Decoration',
    author: '@zeroDegree',
  },
  {
    img: 'imge/marr.jpg',
    title: 'Marriage Events',
    author: '@zeroDegree',
    cols: 2,
  },
];