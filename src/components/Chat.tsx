import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { ChatType } from "../App";
import NoProfile from "../assets/img/no-profile.png";
import Torahack from "../assets/img/no-profile.png";

const Chat = (props: ChatType) => {
  const isQuestion = (props.type === "question");
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Torahack} />
        ) : (
            <Avatar alt="icon" src={NoProfile} />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">Dummy Text</div>
    </ListItem>
  );
}

export default Chat;