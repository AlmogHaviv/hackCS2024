import React, {useState} from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';


export default function ActionModal({title, onSave, children}) {
  const [open, setOpen] = useState(false);

  const onClickSave = () => {
    onSave();
    setOpen(false);
  }

  return (
    <React.Fragment>
      {/** The button that open the modal. you can change the text of the button below */}
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Add new post
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
            // here you can change the modal styles
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
            {/* modal title */}
            {title}
          </Typography>

          {/** here you can add elements like inputs, dropdown, etc. */}
          {children}

          {/** modal buttons */}
          {onSave &&
            <div style={{display: 'flex', justifyContent: 'flex-end', gap: '15px', marginTop: '20px'}}>
              <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={onClickSave}>SAVE</Button>
            </div>
          }
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}