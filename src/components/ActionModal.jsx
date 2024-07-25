import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Input } from '@mui/joy';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function ActionModal({ title, onSave, children }) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onClickSave = () => {
    // Pass the image data to onSave
    onSave(image);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>
        Add New Post
      </Button>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 700,
            minWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            {title}
          </Typography>

          {children}

          <Input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            sx={{ mb: 2 }}
            startDecorator={<PhotoCamera />}
          />

          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{ width: '100%', maxHeight: 200, objectFit: 'cover', marginBottom: '15px' }}
            />
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', marginTop: '20px' }}>
            <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={onClickSave}>SAVE</Button>
          </div>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
