import React from 'react';
import clsx from 'clsx';
import MuiDialog, { DialogProps } from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../Button';

export type Props = DialogProps & {
  dialogClassName?: string;
  title?: string;
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  disableBackdropClick?: boolean;
  disableConfirmButton?: boolean;
  showActions?: boolean;
  hideCloseBtn?: boolean;
};

function Dialog({
  className,
  dialogClassName,
  title,
  onConfirm = () => {},
  disableBackdropClick,
  disableConfirmButton,
  confirmText = 'Submit',
  showActions,
  hideCloseBtn,
  ...props
}: Props) {
  const classes = clsx('p-5 flex flex-col space-y-5 relative text-sm', className);
  const dialogClasses = clsx('custom-dialog', dialogClassName);

  return (
    <MuiDialog
      {...props}
      className={dialogClasses}
      onClose={(event, reason) => {
        if (reason === 'backdropClick' && disableBackdropClick) return;
        props.onClose();
      }}
    >
      <div className={classes}>
        {title && (
          <h2 className="text-lg font-semibold mb-3">
            {title}
          </h2>
        )}
        {!hideCloseBtn && (
          <Button
            className="!absolute top-5 right-3 !m-0 !p-0 !min-w-max !mr-1"
            variant="text"
            color="inherit"
            type="button"
            onClick={props.onClose}
          >
            <CloseIcon />
          </Button>
        )}
        {props.children}
        {showActions && (
          <div className="flex justify-end items-center space-x-2 !mt-8">
            <Button
              variant="outlined"
              color="secondary"
              type="button"
              onClick={props.onClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={onConfirm}
              disabled={disableConfirmButton}
            >
              {confirmText ?? 'Proceed'}
            </Button>
          </div>
        )}
      </div>
    </MuiDialog>
  );
}

export default Dialog;
