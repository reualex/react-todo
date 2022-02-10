import React, { useState } from "react";
import "./styles.scss";

interface IProps {
  children: Element | any;
  list: IItem[];
}

interface IItem {
  title: string;
  func: () => void;
}

const DropDown = (props: IProps) => {
  const [showList, setShowList] = useState<boolean>(false);
  return (
    <button className="dropdown" type="button" onClick={() => setShowList(!showList)} onBlur={() => setShowList(false)}>
      <div>{props.children}</div>
      {props.list.length && showList ? (
        <ul className="dropdown--items">
          {props.list.map((el) => (
            <li key={el.title} onClick={() => el.func()}>
              {el.title}
            </li>
          ))}
        </ul>
      ) : null}
    </button>
  );
};

export default DropDown;
