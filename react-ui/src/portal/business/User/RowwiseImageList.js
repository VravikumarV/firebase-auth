import * as React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
//import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
//import InfoIcon from '@mui/icons-material/Info';

export default function RowwiseImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={item.img}
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
                InfoIcon
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
    img: './images/SAN1001/SAN1001.jpeg',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: './images/SAN1001/SAN1002.jpeg',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: './images/SAN1001/SAN1019.jpeg',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: './images/SAN1001/SAN1006.jpeg',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: './images/SAN1001/SAN1012.jpeg',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: './images/SAN1001/SAN1003.jpeg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: './images/SAN1001/SAN1005.jpeg',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: './images/SAN1001/SAN1014.jpeg',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: './images/SAN1001/SAN1004.jpeg',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: './images/SAN1001/SAN1013.jpeg',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: './images/SAN1001/SAN1007.jpeg',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: './images/SAN1001/SAN1018.jpeg',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];
