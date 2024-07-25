import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import { Divider, Link } from '@mui/joy';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Star from '@mui/icons-material/Star';
import IconButton from '@mui/joy/IconButton';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import Delete from '@mui/icons-material/Delete';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

PostCard.propTypes = {
  blog: PropTypes.object.isRequired,
  removePost: PropTypes.func.isRequired,
};

export default function PostCard({ blog: { id, title, href, description, category, image, review }, removePost }) {
  const [isLiked, setIsLiked] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(image);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        '&:hover': {
          borderColor: 'var(--joy-palette-neutral-outlinedDisabledBorder)',
          bgcolor: 'neutral.softBg',
        },
      }}
    >
      <CardOverflow
        sx={{
          mr: { xs: 'var(--CardOverflow-offset)', sm: 0 },
          mb: { xs: 0, sm: 'var(--CardOverflow-offset)' },
          '--AspectRatio-radius': {
            xs: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0',
            sm: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0 calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))',
          },
        }}
      >
        <AspectRatio
          ratio="1"
          flex
          sx={{
            minWidth: { sm: 120, md: 160 },
            '--AspectRatio-maxHeight': { xs: '160px', sm: '9999px' },
          }}
        >
          <img src={uploadedImage} alt="Post" />
          <Stack
            alignItems="center"
            direction="row"
            sx={{ position: 'absolute', top: 0, width: '100%', p: 1 }}
          >
            <IconButton
              variant="plain"
              size="sm"
              color={isLiked ? 'danger' : 'neutral'}
              onClick={() => setIsLiked((prev) => !prev)}
              sx={{
                display: { xs: 'flex', sm: 'none' },
                ml: 'auto',
                borderRadius: '50%',
                zIndex: '20',
              }}
            >
              <FavoriteRoundedIcon />
            </IconButton>
          </Stack>
        </AspectRatio>
        <input
          accept="image/*"
          type="file"
          id="upload-photo"
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
        <label htmlFor="upload-photo">
          <IconButton
            component="span"
            variant="plain"
            size="sm"
            color="primary"
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              borderRadius: '50%',
            }}
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </CardOverflow>

      <CardContent>
        <Stack
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <div>
            <Chip variant="outlined">{category}</Chip>
            <Typography level="title-md">
              <Link
                underline="none"
                href={href}
                sx={{ color: 'text.primary' }}
                target="_blank"
              >
                {title}
              </Link>
            </Typography>
            <Typography level="title-sm">{description}</Typography>
          </div>
          <Stack direction="row">
            <IconButton
              variant="plain"
              size="sm"
              color={isLiked ? 'danger' : 'neutral'}
              onClick={() => setIsLiked((prev) => !prev)}
              sx={{
                display: { xs: 'none', sm: 'flex' },
                borderRadius: '50%',
              }}
            >
              <FavoriteRoundedIcon />
            </IconButton>
            <Divider orientation="vertical" />
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => removePost(id)}
              sx={{
                display: { xs: 'none', sm: 'flex' },
                borderRadius: '50%',
              }}
            >
              <Delete />
            </IconButton>
          </Stack>
        </Stack>
        <Stack direction="row" sx={{ mt: 'auto' }}>
          <Typography
            level="title-sm"
            startDecorator={
              <React.Fragment>
                <Star sx={{ color: 'warning.400' }} />
                <Star sx={{ color: 'warning.400' }} />
                <Star sx={{ color: 'warning.400' }} />
                <Star sx={{ color: 'warning.400' }} />
                <Star sx={{ color: 'warning.200' }} />
              </React.Fragment>
            }
            sx={{ display: 'flex', gap: 1 }}
          >
            4.0
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
