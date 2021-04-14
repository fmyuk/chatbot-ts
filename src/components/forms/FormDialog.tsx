import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from "./TextInput";

type DialogProps = {
  open: boolean,
  handleClose: () => void
};

export default class FormDialog extends React.Component<DialogProps> {
  constructor(props: DialogProps) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: ""
    }
  }

  inputName = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) {
      return;
    }
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
        <DialogContent>
          <TextInput
            label={ }
            multiline={ }
            rows={ }
            value={ }
            type={ }
            onChange={}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={this.props.handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}