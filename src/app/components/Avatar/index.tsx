import React from "react";
import "./styles.scss";

interface IProps {
    name: string;
    picture?: string;
}

const Avatar = (props: IProps) => {
    const initials = () => {
        return props.name[0].toLocaleUpperCase() + props.name[1].toLocaleUpperCase()
    }
  return <div className="avatar">
      {props.picture ? <img className="avatar--img" src={props.picture} alt={initials()} /> : initials()}
  </div>;
};


export default Avatar;
