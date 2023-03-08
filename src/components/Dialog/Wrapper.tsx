import React, { useEffect, useState } from 'react';
import createEventBus from 'hooks/eventBus';
import Dialog, { Props } from './index';

type EventProps = Omit<Props, 'open' | 'onClose'>;

type DialogEvents = {
  open: (props: EventProps) => void;
  close: () => void;
};

export const dialogEventChannel = createEventBus<DialogEvents>({
  onError: (err) => console.log('dialogEventChannel', err),
});

function DialogWrapper() {
  const [open, setOpen] = useState<boolean>(false);
  const [props, setProps] = useState<EventProps>({} as EventProps);

  const handleDialogOpen = (props: EventProps) => {
    setProps(props);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setProps({} as EventProps);
  };

  useEffect(() => {
    const unsubscribeDialogOpen = dialogEventChannel.on('open', handleDialogOpen);
    const unsubscribeDialogClose = dialogEventChannel.on('close', handleDialogClose);

    return () => {
      unsubscribeDialogOpen();
      unsubscribeDialogClose();
    };
  }, []);

  return (
    <Dialog
      {...props}
      open={open}
      onClose={handleDialogClose}
    />
  );
}

export default DialogWrapper;
