import { MessageType } from "../HW1";
import s from "./Message.module.css";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
  message: MessageType;
};

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
  return (
    <div id={"hw1-message-" + props.message.id} className={s.message}>
      <div className={s.imageAndText}>
        <img
          id={"hw1-avatar-" + props.message.id}
          // создаёт студент
          src={props.message.user.avatar}
          alt={props.message.user.name}
          //
        />
        <div className={s.text}>
          <div id={"hw1-name-" + props.message.id} className={s.name}>
            {/*создаёт студент*/}
            <div>{props.message.user.name}</div>
            {/**/}
          </div>
          <div id={"hw1-text-" + props.message.id} className={s.messageText}>
            {/*создаёт студент*/}
            <p>{props.message.message.text}</p>
            {/**/}
          </div>
        </div>
      </div>
      <div id={"hw1-time-" + props.message.id} className={s.time}>
        {/*создаёт студент*/}
        <div>{props.message.message.time}</div>
        {/**/}
      </div>
    </div>
  );
};

export default Message;
