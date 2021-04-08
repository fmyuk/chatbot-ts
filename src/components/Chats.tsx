import React from "react";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Chat } from "./index";
import { ChatType } from "../App";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    }
  })
);

const Chats = (props: { chats: ChatType[] }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.chats.map((chat, index) => {
        <Chat text={chat.text} type={chat.type} key={index.toString()} />
      })}
    </List>
  );
}

export default Chats;